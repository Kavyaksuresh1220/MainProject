import React, { useState, useEffect } from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { getAllgroceryAPI } from '../../services/groceryManagementAPIs'

function Grocery() {
  const [token, setToken] = useState('')
  const [allgrocery, setallgrocery] = useState([])

  const viewallgrocery = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }
      const response = await getAllgroceryAPI(reqHeader)
      console.log(response)
      setallgrocery(response.data.allgrocery)
    } catch (err) {
      console.log("ERROR", err)
    }
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (token) {
      viewallgrocery()
    }
  }, [token])

  const itemPrice = 555

  const [quantity, setQuantity] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
    setTotalAmount(prev => prev + itemPrice)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
      setTotalAmount(prev => prev - itemPrice)
    }
  }

  return (
    <>
      <Userheader />

      {token ?
        <div>
          {/* Search Bar */}
          <div className="max-w-6xl mx-auto px-6 mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for groceries, fruits, vegetables..."
                className="w-full border rounded-xl pl-5 pr-14 py-3 focus:ring-orange-400 focus:border-orange-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Categories */}
          <section className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {['Vegetables', 'Fruits', 'Dairy', 'Rice & Grains', 'Spices', 'Beverages'].map(cat => (
                <button
                  key={cat}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Products */}
          <section className="max-w-6xl mx-auto px-6 pb-28">
            <h2 className="text-2xl font-semibold mb-6">Popular Items Near You</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {allgrocery?.map(item => (
                <div key={item._id} className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
                  
                  <div className="h-32 bg-gray-100 rounded mb-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover rounded"
                      />
                    )}
                  </div>

                  <h3 className="font-semibold">{item.productName}</h3>
                  <p className="text-sm text-gray-600">{item.quantity } {item.unit}</p>
                  <p className="text-sm text-gray-600">{item.description } </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold">₹{item.price}</span>

                    {quantity === 0 ? (
                      <button
                        onClick={handleIncrement}
                        className="bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-lg text-lg font-bold"
                      >
                        +
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleDecrement}
                          className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold"
                        >
                          -
                        </button>

                        <span className="font-semibold">{quantity}</span>

                        <button
                          onClick={handleIncrement}
                          className="bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-lg text-lg font-bold"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Cart Bar */}
          {quantity > 0 && (
            <section className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-20">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">{quantity} item(s) added</p>
                  <p className="font-bold">₹{totalAmount}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold text-white">
                  Proceed to Checkout
                </button>
              </div>
            </section>
          )}
        </div>
        :
        "ERROR"
      }

      <Footer />
    </>
  )
}

export default Grocery

import React, { useState, useEffect, useContext } from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { getAllgroceryAPI } from '../../services/groceryManagementAPIs'
import { searchContext } from '../../context/SearchContextShare'

function Grocery() {
 const { searchKey, setSearchKey } = useContext(searchContext)

 
  console.log(searchKey);
  
  const [token, setToken] = useState('')
  const [allgrocery, setallgrocery] = useState([])
  const [tempData,setTempData]=useState([])

  const viewallgrocery = async (searchKey) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }
      const response = await getAllgroceryAPI(searchKey,reqHeader)
      console.log(response)
      setallgrocery(response.data.allgrocery)
      setTempData(response.data.allgrocery)
    } catch (err) {
      console.log("ERROR", err)
    }
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (token) {
      viewallgrocery(searchKey)
    }
  }, [token,searchKey])

  // 🟢 FIX STARTS HERE
  const [quantities, setQuantities] = useState({})
  const [totalAmount, setTotalAmount] = useState(0)

  const handleIncrement = (item) => {
    setQuantities(prev => ({
      ...prev,
      [item._id]: (prev[item._id] || 0) + 1
    }))
    setTotalAmount(prev => prev + item.price)
  }

  const handleDecrement = (item) => {
    if (!quantities[item._id]) return

    setQuantities(prev => ({
      ...prev,
      [item._id]: prev[item._id] - 1
    }))
    setTotalAmount(prev => prev - item.price)
  }
 

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0)



 const handlefilter = (value) => {
  const filtered = tempData.filter(
    item => item.category.toLowerCase().trim() === value.toLowerCase().trim()
  );
  setallgrocery(filtered); 
}


  return (
    <div  className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Userheader />

      {token ?
        <div >
          {/* Search Bar */}
          <div className="max-w-6xl mx-auto px-6 mt-6">
            <div className="relative">
              <input
              onChange={(e)=>setSearchKey(e.target.value)}
                type="text"
                placeholder="Search for groceries, fruits, vegetables..."
                className="w-full border rounded-xl pl-5 pr-14 py-3 
             bg-white text-gray-900 
             dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
             focus:ring-orange-400 focus:border-orange-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 
                   bg-orange-500 hover:bg-orange-600 
                   text-white px-4 py-2 rounded-lg text-sm font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Categories */}
          <section className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Vegetables")}>
    Vegetables
  </button>

  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Fruits")}>
    {/* functo name with value */}
    Fruits
  </button>

  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Dairy")}>
    Dairy
  </button>

  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Grains")}>
    Grains
  </button>

  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Spices")}>
    Spices
  </button>

  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Beverages")}>
    Beverages
  </button>
  <button className="bg-white text-gray-900 
                   dark:bg-gray-800 dark:text-gray-100
                   p-4 rounded-xl shadow 
                   hover:shadow-lg transition" name='fltr' onClick={()=>handlefilter("Snacks")}>
    Snacks
  </button>
</div>

          </section>

          {/* Products */}
          <section className="max-w-6xl mx-auto px-6 pb-28">
            <h2 className="text-2xl font-semibold mb-6">Popular Items Near You</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {allgrocery?.map(item => {
                const itemQty = quantities[item._id] || 0

                return (
                  <div key={item._id} className="bg-white dark:bg-gray-800 
             text-gray-900 dark:text-gray-100
             rounded-2xl p-4 shadow hover:shadow-lg transition">
                    
                    <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.productName}
                          className="h-full w-full object-cover rounded"
                        />
                      )}
                    </div>

                    <h3 className="font-semibold">{item.productName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.quantity} {item.unit}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    <div className="flex justify-between items-center mt-3">
                      <span className="font-bold">₹{item.price}</span>

                      {itemQty === 0 ? (
                        <button
                          onClick={() => handleIncrement(item)}
                          className="bg-orange-400 hover:bg-orange-500 
             px-3 py-1 rounded-lg text-lg font-bold"
                        >
                          +
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDecrement(item)}
                            className="bg-gray-200 dark:bg-gray-700 
             px-3 py-1 rounded-lg text-lg font-bold"
                          >
                            -
                          </button>

                          <span className="font-semibold">{itemQty}</span>

                          <button
                            onClick={() => handleIncrement(item)}
                            className="bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-lg text-lg font-bold"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Bottom Cart Bar */}
          {totalItems > 0 && (
            <section className="fixed bottom-0 left-0 w-full 
                    bg-white dark:bg-gray-800 
                    border-t dark:border-gray-700 
                    shadow-lg z-20">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{totalItems} item(s) added</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹{totalAmount}</p>
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
    </div>
  )
}

export default Grocery

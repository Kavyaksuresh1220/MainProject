import React, { useEffect, useState } from 'react'
import { addgroceryAPI, getAllgroceryAPI } from '../../../services/groceryManagementAPIs'

function AddItem() {

  const [token, setToken] = useState('')
  const [userdetails, setUserdetails] = useState({})

  const [groceryDetails, setGroceryDetails] = useState({
    productName: "",
    category: "",
    price: "",
    quantity: "",
    unit: "",
    image: "",
    expiryDate: "",
    description: "",
    isAvailable: true
  })

  useEffect(() => {
    const userToken = sessionStorage.getItem("token")
    const userData = JSON.parse(sessionStorage.getItem("userDetails"))

    if (userToken) {
      setToken(userToken)
      setUserdetails(userData)
    }
  }, [])

  const handleAddgrocery = async (e) => {
  e.preventDefault()

  console.log(groceryDetails)

  const {
    productName,
    category,
    price,
    quantity,
    unit,
    image,
    expiryDate,
    description,
    isAvailable
  } = groceryDetails

  if (
    !productName ||
    !category ||
    !price ||
    !quantity ||
    !unit ||
    !image ||
    !expiryDate ||
    !description
  ) {
    alert("Please fill the form")
    return
  }

  const reqBody = {
    productName,
    category,
    price,
    quantity,
    unit,
    image,
    expiryDate,
    description,
    isAvailable
  }

  const reqHeader = {
    Authorization: `Bearer ${token}`
  }

  try {
    const result = await addgroceryAPI(reqBody, reqHeader)
    console.log(result)

    if (result.status === 200) {
      alert(result.data.message)
    } else {
      alert("Server error")
    }
  } catch (err) {
    console.log("ERROR", err)
    alert("Something went wrong")
  }
}


  return (
    <div>
      <div className="bg-white shadow rounded-lg mt-4 overflow-hidden">

        <div className="px-4 py-3 font-semibold bg-gray-100 border-b">
          Add New Grocery Item
        </div>

        <div className="p-4">
          <form onSubmit={handleAddgrocery} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block font-medium mb-1">Product Name</label>
                <input
                  value={groceryDetails.productName}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, productName: e.target.value })}
                  type="text"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Category</label>
                <select
                  value={groceryDetails.category}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, category: e.target.value })}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="" disabled>Choose category</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Dairy</option>
                  <option>Grains</option>
                  <option>Snacks</option>
                  <option>Beverages</option>
                  <option>Essentials</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Price (₹)</label>
                <input
                  value={groceryDetails.price}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, price: e.target.value })}
                  type="number"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Quantity</label>
                <input
                  value={groceryDetails.quantity}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, quantity: e.target.value })}
                  type="number"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Unit</label>
                <select
                  value={groceryDetails.unit}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, unit: e.target.value })}
                  className="w-full border rounded px-3 py-2"
                >
                  <option>Kg</option>
                  <option>Gram</option>
                  <option>Litre</option>
                  <option>Piece</option>
                  <option>Packet</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Product Image URL</label>
                <input
                  value={groceryDetails.image}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, image: e.target.value })}
                  type="text"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Expiry Date</label>
                <input
                  value={groceryDetails.expiryDate}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, expiryDate: e.target.value })}
                  type="date"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  value={groceryDetails.description}
                  onChange={(e) => setGroceryDetails({ ...groceryDetails, description: e.target.value })}
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-right space-x-2">
                <button
                  type="reset"
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Clear
                </button>
                <button
  type="submit"
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  Add Item
</button>

              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AddItem

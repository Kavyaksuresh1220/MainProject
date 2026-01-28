import React, { useEffect, useState } from 'react'
import { myConfirmedOrdersAPI ,updateToPickedAPI} from '../../services/wasteManagementAPIs'
import LaundryHeader from '../laundry/LaundryHeader'

function Wastemanagementconfirm() {
   const [details, setDetails] = useState(null)
  
      useEffect(() => {
          getconfirmedorder()
        }, [])
  
        const getconfirmedorder = async () => {
    try {
      const response = await myConfirmedOrdersAPI()
  
      if (response.data.firstorder) {
        setDetails(response.data.firstorder)
      } else {
        setDetails(null)
      }
    } catch (error) {
      console.error("Failed to fetch confirmed orders", error)
    }
  }
  const picked = async () => {
              try {
                const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
                const staffName = userDetails?.username   // adjust if key is different
          
                await updateToPickedAPI(details._id, staffName)
                console.log(details);
                alert("picked")
          
                // refresh pending order
                getconfirmedorder()
              } catch (error) {
                console.error("Failed to confirm order", error)
              }
            }
  
  return (
     <>
      <LaundryHeader/>

      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Confirmed Orders
        </h2>

        {details && details._id ? (
  <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
    <div>
      <p className="font-semibold text-lg">{details.customername}</p>
      <p className="text-gray-600">{details.service}</p>
      <p className="text-gray-600">
        No of Clothes: {details.noofclothes}
      </p>
      <p className="text-sm text-gray-500">
        Pickup: {details.date} • {details.time}
      </p>
      <p className="text-yellow-500 font-medium">
        Status: {details.status}
      </p>
    </div>

    <button
      className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold"
      onClick={picked}
    >
      Picked
    </button>
  </div>
) : (
  <div className="text-center text-gray-500 mt-10">
    No confirmed orders available
  </div>
)}

      </div>
    </>
  )
}

export default Wastemanagementconfirm

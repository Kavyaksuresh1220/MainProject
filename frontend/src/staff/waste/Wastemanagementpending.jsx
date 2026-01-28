import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getwastemanagementAPI, WasteupdateToConfirmAPI } from '../../services/wasteManagementAPIs'
import LaundryHeader from '../laundry/LaundryHeader'

function Wastemanagementpending() {
    const [details, setDetails] = useState({})
   useEffect(() => {
      getpendingorder()
    }, []) 

     const getpendingorder = async () => {
        try {
          const response = await getwastemanagementAPI()
          setDetails(response.data.firstorder)
        } catch (error) {
          console.error("Failed to fetch pending orders", error)
        }
      }

      const confirm = async () => {
          try {
            const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
            const staffName = userDetails?.username  
            await WasteupdateToConfirmAPI(details._id, staffName)
            console.log(details);
            
      
            // refresh pending order
            getpendingorder()
          } catch (error) {
            console.error("Failed to confirm order", error)
          }
        }
     
  return (
    <>
      <LaundryHeader/>

      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Pending Orders
        </h2> 

        {details ? (
          <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">{details.customername}</p>
              <p className="text-gray-600">{details.service}</p>
              <p className="text-gray-600">
                Quantity: {details.quantity}
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
              onClick={confirm}
              
            >
              Confirm
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No pending orders available
          </div>
        )}
      </div>
    </>
  )
}

export default Wastemanagementpending

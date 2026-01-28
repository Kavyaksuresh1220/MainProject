import React, { useEffect, useState } from 'react'
import LaundryHeader from './LaundryHeader'
import { myConfirmedOrdersAPI, updateToPickedAPI } from '../../services/allAPIS'

function Laundryconfirmed() {
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
      const token = sessionStorage.getItem("token")

      await updateToPickedAPI(details._id, token)

      alert("Order picked successfully ✅")

      console.log(details);
      
      // refresh confirmed order
      getconfirmedorder()
    } catch (error) {
      console.error("Failed to pick order", error)
    }
  }

  return (
    <>
      <LaundryHeader />

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
                Pickup: {new Date(details.date).toDateString()} • {details.time}
              </p>
              <p className="text-yellow-500 font-medium">
                Status: {details.status}
              </p>
            </div>

            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold"
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

export default Laundryconfirmed

import React, { useEffect, useState } from 'react'
import { myPickedOrdersAPI, updateToProcessingAPI } from '../../services/allAPIS'
import LaundryHeader from './LaundryHeader'

function Laundrypicked() {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    getpickedorder()
  }, [])

  const getpickedorder = async () => {
    try {
      const response = await myPickedOrdersAPI()
      setDetails(response.data.firstorder || null)
    } catch (error) {
      console.error("Failed to fetch picked orders", error)
    }
  }

  const processing = async () => {
    if (!details?._id) return

    try {
      await updateToProcessingAPI(details._id)
      alert("Order moved to Processing")
console.log(details);

      // refresh picked orders
      getpickedorder()
    } catch (error) {
      console.error("Failed to update order to processing", error)
    }
  }

  return (
    <>
      <LaundryHeader />

      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Picked Orders
        </h2>

        {details ? (
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
              className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
              onClick={processing}
              disabled={!details}
            >
              Processing
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No picked orders available
          </div>
        )}
      </div>
    </>
  )
}

export default Laundrypicked

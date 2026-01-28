import React from 'react'
import Userheader from '../user/components/Userheader'
import { useState } from 'react'

function Laundryhistory() {
  const[details,setDetails]=useState({
    "status":"",
    "service":"",
    "noofclothes":"",
    "type":"",
    "date":"",
    "time":"",
    "totalamount":"",
    "payment":""
  })
  return (
    <>
      <Userheader />

      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Laundry History</h2>

        {/* Laundry Order Card */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Laundry Order</h3>
            <span className="px-3 py-0.5 rounded-full text-xs bg-green-100 text-green-700">
              Paid
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-gray-500">Service</p>
              <p className="font-medium">Wash & Fold</p>
            </div>

            <div>
              <p className="text-gray-500">Number of Clothes</p>
              <p className="font-medium">10</p>
            </div>

            <div>
              <p className="text-gray-500">Fabric Type</p>
              <p className="font-medium">Cotton</p>
            </div>

            <div>
              <p className="text-gray-500">Pickup Date</p>
              <p className="font-medium">2026-01-22</p>
            </div>

            <div>
              <p className="text-gray-500">Time Slot</p>
              <p className="font-medium">9 AM – 12 PM</p>
            </div>

            <div>
              <p className="text-gray-500">Total Amount</p>
              <p className="font-medium">₹300</p>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-600">
              Order Status: <b>Confirmed</b>
            </span>

            <span className="text-green-700 font-semibold">
              Payment Successful
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Laundryhistory

import React, { useEffect, useState } from 'react'
import { laundryHistoryCustomerAPI } from '../../services/allAPIS'
import Userheader from './Userheader'

function Userlaundryhistory() {
  const [details, setDetails] = useState([]) // array to hold multiple orders
  const [token, setToken] = useState('')

  const laundryOrdrhistory = async (userToken) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${userToken}`
      }
      const response = await laundryHistoryCustomerAPI(reqHeader)
      console.log(response);

      // Save all orders from API into details array
      if (response.data) {
        setDetails(response.data)
      }

    } catch (err) {
      console.log("ERROR", err)
    }
  }

  useEffect(() => {
    const userToken = sessionStorage.getItem("token")
    if (userToken) {
      setToken(userToken)
      laundryOrdrhistory(userToken)
    }
  }, [])

  return (
    <>
      <Userheader />

      <section className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Laundry History</h2>

        {details.length === 0 ? (
          <p className="text-gray-500">No laundry history found.</p>
        ) : (
          details.map((order, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Laundry Order</h3>
                <span className={`px-3 py-0.5 rounded-full text-xs ${order.payment === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {order.payment || 'Pending'}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500">Service</p>
                  <p className="font-medium">{order.service}</p>
                </div>

                <div>
                  <p className="text-gray-500">Number of Clothes</p>
                  <p className="font-medium">{order.noofclothes}</p>
                </div>

                <div>
                  <p className="text-gray-500">Fabric Type</p>
                  <p className="font-medium">{order.type}</p>
                </div>

                <div>
                  <p className="text-gray-500">Pickup Date</p>
                  <p className="font-medium">{order.date}</p>
                </div>

                <div>
                  <p className="text-gray-500">Time Slot</p>
                  <p className="font-medium">{order.time}</p>
                </div>

                <div>
                  <p className="text-gray-500">Total Amount</p>
                  <p className="font-medium">₹{order.totalamount}</p>
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600">
                  Order Status: <b>{order.status}</b>
                </span>

                <span className="text-green-700 font-semibold">
                  {order.payment === 'Paid' ? 'Payment Successful' : 'Pending Payment'}
                </span>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  )
}

export default Userlaundryhistory

import React from 'react'

function OrderDetails() {
  return (
    
    <div className="bg-white shadow rounded-lg mb-6">

      {/* Card Header */}
      <div className="px-6 py-4 border-b font-semibold text-gray-700">
        Orders
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-center text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Customer</th>
              <th className="border px-4 py-2">Items</th>
              <th className="border px-4 py-2">Payment</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">#ORD101</td>
              <td className="border px-4 py-2">Anu</td>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  Paid
                </span>
              </td>
              <td className="border px-4 py-2">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">
                  Pending
                </span>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  Update
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">#ORD102</td>
              <td className="border px-4 py-2">Rahul</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs">
                  COD
                </span>
              </td>
              <td className="border px-4 py-2">
                <span className="bg-sky-400 text-black px-2 py-1 rounded text-xs">
                  Packed
                </span>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  Update
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">#ORD103</td>
              <td className="border px-4 py-2">Sneha</td>
              <td className="border px-4 py-2">6</td>
              <td className="border px-4 py-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  Paid
                </span>
              </td>
              <td className="border px-4 py-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                  Delivered
                </span>
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-gray-400 text-white px-3 py-1 rounded text-xs cursor-not-allowed"
                  disabled
                >
                  Done
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default OrderDetails

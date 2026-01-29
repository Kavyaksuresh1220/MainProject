import React from 'react'

function Order() {
  return (
    <>
      

     

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white shadow rounded-lg text-center p-6">
            <h6 className="text-gray-600 text-sm">New Orders</h6>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              12
            </h2>
          </div>

          <div className="bg-white shadow rounded-lg text-center p-6">
            <h6 className="text-gray-600 text-sm">Orders to Pack</h6>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              8
            </h2>
          </div>

          <div className="bg-white shadow rounded-lg text-center p-6">
            <h6 className="text-gray-600 text-sm">Deliveries</h6>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              5
            </h2>
          </div>

          <div className="bg-white shadow rounded-lg text-center p-6">
            <h6 className="text-gray-600 text-sm">Out of Stock</h6>
            <h2 className="text-3xl font-bold text-red-600 mt-2">
              3
            </h2>
          </div>

        </div>
    
    </>
  )
}

export default Order

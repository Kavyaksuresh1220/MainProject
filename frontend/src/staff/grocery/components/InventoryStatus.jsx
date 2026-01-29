import React from 'react';

function InventoryStatus() {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">

      {/* Card Header */}
      <div className="px-4 py-3 font-semibold bg-gray-100 border-b">
        Inventory Status
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Product</th>
              <th className="border px-3 py-2">Category</th>
              <th className="border px-3 py-2">Stock</th>
              <th className="border px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border px-3 py-2">Rice</td>
              <td className="border px-3 py-2">Grains</td>
              <td className="border px-3 py-2">25</td>
              <td className="border px-3 py-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Available
                </span>
              </td>
            </tr>

            <tr>
              <td className="border px-3 py-2">Milk</td>
              <td className="border px-3 py-2">Dairy</td>
              <td className="border px-3 py-2">8</td>
              <td className="border px-3 py-2">
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  Low Stock
                </span>
              </td>
            </tr>

            <tr>
              <td className="border px-3 py-2">Sugar</td>
              <td className="border px-3 py-2">Essentials</td>
              <td className="border px-3 py-2">0</td>
              <td className="border px-3 py-2">
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default InventoryStatus;

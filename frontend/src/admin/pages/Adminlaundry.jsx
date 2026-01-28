import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Adminsidebar from '../components/Adminsidebar'
import {
  getAllLaoundryOrderAPI,
  getconfirmLaundryAPI,
  getpendingLaundryAPI,
  getpickedLaundryAPI,
  getdeliveredLaundryAPI,
  getprocessingLaundryAPI,
  getcompletedLaundryAPI,
  getLaundrystaffsAPI,
  addLaundryStaffAPI, // import your add staff API
  deleteLaundryStaffAPI,
  getLaundryIncomeReportAPI,
  getPendingLaundryyyAPI
} from '../../services/allAPIS'
import LaundryOverviewChart from '../components/LaundryOverviewChart'

function Adminlaundry() {
  const [count, setCount] = useState(0)
const [totalAmount, setTotalAmount] = useState(0)
const [staffSalary, setStaffSalary] = useState(0)
const [income, setIncome] = useState(0)


  const [pendingCount, setPendingCount] = useState(0)
  const [pendingOrders, setPendingOrders] = useState([])

  const [confirmCount, setConfirmCount] = useState(0)
  const [confirmOrders, setConfirmOrders] = useState([])

  const [pickedCount, setPickedCount] = useState(0)
  const [pickedOrders, setPickedOrders] = useState([])

  const [processingCount, setProcessingCount] = useState(0)
  const [processingOrders, setProcessingOrders] = useState([])

  const [deliveredCount, setDeliveredCount] = useState(0)
  const [deliveredOrders, setDeliveredOrders] = useState([])

  const [completedCount, setCompletedCount] = useState(0)
  const [completedOrders, setCompletedOrders] = useState([])

  // 🔹 Laundry staff states
  const [staffCount, setStaffCount] = useState(0)
  const [staffs, setStaffs] = useState([])
  const [showStaffTable, setShowStaffTable] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false) // form toggle
  const [newStaff, setNewStaff] = useState({ username: "", email: "", phonenumber: "", password: "" }) // form data

  const [showPendingTable, setShowPendingTable] = useState(false)
  const [showConfirmTable, setShowConfirmTable] = useState(false)
  const [showPickedTable, setShowPickedTable] = useState(false)
  const [showProcessingTable, setShowProcessingTable] = useState(false)
  const [showDeliveredTable, setShowDeliveredTable] = useState(false)
  const [showCompletedTable, setShowCompletedTable] = useState(false)

  useEffect(() => {
    getOrderCount()
    getPendingOrders()
    getConfirmOrders()
    getPickedOrders()
    getProcessingOrders()
    getDeliveredOrders()
    getCompletedOrders()
    getLaundryStaffs()
    fetchIncomeReport()
  }, [])

  const resetTables = () => {
    setShowPendingTable(false)
    setShowConfirmTable(false)
    setShowPickedTable(false)
    setShowProcessingTable(false)
    setShowDeliveredTable(false)
    setShowCompletedTable(false)
    setShowStaffTable(false)
    setShowAddForm(false)
  }

  // TOTAL ORDERS
  const getOrderCount = async () => {
    const res = await getAllLaoundryOrderAPI()
    setCount(res.data.totalOrders)
  }

  // PENDING
  const getPendingOrders = async () => {
    const res = await getPendingLaundryyyAPI()
    setPendingCount(res.data.noofpending)
    setPendingOrders(res.data.pending)
  }

  // CONFIRMED
  const getConfirmOrders = async () => {
    const res = await getconfirmLaundryAPI()
    setConfirmCount(res.data.noofconfirm)
    setConfirmOrders(res.data.confirm)
  }
 
  // PICKED
  const getPickedOrders = async () => {
    const res = await getpickedLaundryAPI()
    setPickedCount(res.data.noofpicked)
    setPickedOrders(res.data.picked)
  }

  // PROCESSING
  const getProcessingOrders = async () => {
    const res = await getprocessingLaundryAPI()
    setProcessingCount(res.data.noofprocessing)
    setProcessingOrders(res.data.processing)
  }

  // DELIVERED
  const getDeliveredOrders = async () => {
    const res = await getdeliveredLaundryAPI()
    setDeliveredCount(res.data.noofdelivered)
    setDeliveredOrders(res.data.delivered)
  }

  // COMPLETED
  const getCompletedOrders = async () => {
    const res = await getcompletedLaundryAPI()
    setCompletedCount(res.data.noofcompleted)
    setCompletedOrders(res.data.completed)
  }

  // 🔹 LAUNDRY STAFF
  const getLaundryStaffs = async () => {
    const res = await getLaundrystaffsAPI()
    setStaffs(res.data.staffs)
    setStaffCount(res.data.totalstaffs)
  }

  // 🔹 ADD STAFF
  const handleAddStaff = async () => {
    try {
      await addLaundryStaffAPI(newStaff)
      getLaundryStaffs() // refresh list
      setNewStaff({ username: "", email: "", phonenumber: "", password: "" })
      setShowAddForm(false)
    } catch (err) {
      console.error("Error adding staff:", err)
    }
  }
const handleDeleteStaff = async (id) => {
  try {
    await deleteLaundryStaffAPI(id)
    getLaundryStaffs()
  } catch (err) {
    console.error("Failed to delete staff:", err)
  }
}


const fetchIncomeReport = async () => {
  try {
    const res = await getLaundryIncomeReportAPI()
    const { totalAmount, staffSalary, income } = res.data
    setTotalAmount(totalAmount)
    setStaffSalary(staffSalary)
    setIncome(income)
  } catch (err) {
    console.error("Failed to fetch income report:", err)
  }
}

  return (
    <>
      <AdminHeader />
      <div className="flex min-h-screen bg-gray-100">
        <Adminsidebar />
        <div className="flex-1 p-6 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Laundry Dashboard</h2>
          <LaundryOverviewChart
           pending={pendingCount}
  confirmed={confirmCount}
  picked={pickedCount}
  processing={processingCount}
  delivered={deliveredCount}
  completed={completedCount}
  totalAmount={totalAmount}
  staffSalary={staffSalary}
  income={income}
/>


          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {/* Laundry Staff */}
            <button
              onClick={() => { resetTables(); setShowStaffTable(true) }}
              className="bg-white p-5 rounded-xl shadow text-left"
            >
              <p className="text-gray-500">Laundry Staff</p>
              <h3 className="text-2xl font-bold text-indigo-600">{staffCount}</h3>
            </button>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold">{count}</h3>
            </div>

            <button onClick={() => { resetTables(); setShowPendingTable(true) }} className="bg-white p-5 rounded-xl shadow text-left">
              <p className="text-gray-500">Pending</p>
              <h3 className="text-2xl font-bold text-blue-600">{pendingCount}</h3>
            </button>

            <button onClick={() => { resetTables(); setShowConfirmTable(true) }} className="bg-white p-5 rounded-xl shadow text-left">
              <p className="text-gray-500">Confirmed</p>
              <h3 className="text-2xl font-bold text-indigo-600">{confirmCount}</h3>
            </button>

            <button onClick={() => { resetTables(); setShowPickedTable(true) }} className="bg-white p-5 rounded-xl shadow text-left">
              <p className="text-gray-500">Picked</p>
              <h3 className="text-2xl font-bold text-yellow-600">{pickedCount}</h3>
            </button>

            <button onClick={() => { resetTables(); setShowProcessingTable(true) }} className="bg-white p-5 rounded-xl shadow text-left">
              <p className="text-gray-500">Processing</p>
              <h3 className="text-2xl font-bold text-orange-600">{processingCount}</h3>
            </button>

            <button onClick={() => { resetTables(); setShowCompletedTable(true) }} className="bg-white p-5 rounded-xl shadow text-left">
              <p className="text-gray-500">Completed</p>
              <h3 className="text-2xl font-bold text-emerald-600">{completedCount}</h3>
            </button>

            <button onClick={() => { resetTables(); setShowDeliveredTable(true) }} className="bg-white p-5 rounded-xl shadow text-left">
              <p className="text-gray-500">Delivered</p>
              <h3 className="text-2xl font-bold text-green-600">{deliveredCount}</h3>
            </button>

            <div className="bg-white p-5 rounded-xl shadow">
  <p className="text-gray-500">Total Transactions</p>
  <h3 className="text-2xl font-bold">RS.{totalAmount}</h3>
</div>

<div className="bg-white p-5 rounded-xl shadow">
  <p className="text-gray-500">Staff Salary</p>
  <h3 className="text-2xl font-bold">RS.{staffSalary}</h3>
</div>

<div className="bg-white p-5 rounded-xl shadow">
  <p className="text-gray-500">Income</p>
  <h3 className="text-2xl font-bold">RS.{income}</h3>
</div>

          </div>

          {/* ORDER TABLES */}
          {showPendingTable && <OrderTable title="Pending Orders" orders={pendingOrders} emptyText="No pending orders" />}
          {showConfirmTable && <OrderTable title="Confirmed Orders" orders={confirmOrders} emptyText="No confirmed orders" />}
          {showPickedTable && <OrderTable title="Picked Orders" orders={pickedOrders} emptyText="No picked orders" />}
          {showProcessingTable && <OrderTable title="Processing Orders" orders={processingOrders} emptyText="No processing orders" />}
          {showDeliveredTable && <OrderTable title="Delivered Orders" orders={deliveredOrders} emptyText="No delivered orders" />}
          {showCompletedTable && <OrderTable title="Completed Orders" orders={completedOrders} emptyText="No completed orders" />}

          {/* STAFF TABLE */}
          {showStaffTable && (
            <div className="bg-white p-6 rounded-xl shadow mt-6">
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Laundry Staff Details</h3>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  + Add
                </button>
              </div>

              {/* ADD FORM */}
              {showAddForm && (
                <div className="bg-gray-50 p-4 rounded mb-4 border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={newStaff.username}
                      onChange={(e) => setNewStaff({ ...newStaff, username: e.target.value })}
                      className="border p-2 rounded"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={newStaff.email}
                      onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                      className="border p-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      value={newStaff.phonenumber}
                      onChange={(e) => setNewStaff({ ...newStaff, phonenumber: e.target.value })}
                      className="border p-2 rounded"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={newStaff.password}
                      onChange={(e) => setNewStaff({ ...newStaff, password: e.target.value })}
                      className="border p-2 rounded"
                    />
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 bg-gray-400 text-white rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddStaff}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Add Staff
                    </button>
                  </div>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Phone</th>
                      <th className="border px-4 py-2">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffs.length ? staffs.map(staff => (
                      <tr key={staff._id} className="text-center">
                        <td className="border px-4 py-2">{staff.username}</td>
                        <td className="border px-4 py-2">{staff.email}</td>
                        <td className="border px-4 py-2">{staff.phonenumber|| '-'}</td>
                        <td className="border px-4 py-2">
                          <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700" onClick={() => handleDeleteStaff(staff._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-gray-500">
                          No laundry staff found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}


export default Adminlaundry

// ================= REUSABLE TABLE =================
function OrderTable({ title, orders, emptyText }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Customer</th>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Clothes</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Staff</th>
            </tr>
          </thead>
          <tbody>
            {orders.length ? orders.map(order => (
              <tr key={order._id} className="text-center">
                <td className="border px-4 py-2">{order.customername}</td>
                <td className="border px-4 py-2">{order.service}</td>
                <td className="border px-4 py-2">{order.noofclothes}</td>
                <td className="border px-4 py-2">{order.type}</td>
                <td className="border px-4 py-2">{new Date(order.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{order.time}</td>
                <td className="border px-4 py-2 font-semibold">{order.status}</td>
                <td className="border px-4 py-2">{order.laundrystaff || '-'}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  {emptyText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

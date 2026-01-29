import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Adminsidebar from '../components/Adminsidebar'
import { addgroceryManagementStaffAPI, deletegroceryManagementstaffAPI, getgroceryManagementstaffsAPI } from '../../services/groceryManagementAPIs'

function AdminGrocery() {
  const [staffCount, setStaffCount] = useState(0)
    const [staffs, setStaffs] = useState([])
    const [newStaff, setNewStaff] = useState({ username: "", email: "", phonenumber: "", password: "" })
    const [count, setCount] = useState(0)



    const [showStaffTables, setShowStaffTables] = useState(false)
    
      const [showAddForm, setShowAddForm] = useState(false)

      useEffect(() => {
          getgroceryManagementStaffs()
         
          
          
        }, [])

          const resetTables = () => {
    setShowStaffTables(false)
    setShowAddForm(false)
   
  }

   // addstaff
    const handleAddStaff = async () => {
      try {
        await addgroceryManagementStaffAPI(newStaff)
        getgroceryManagementStaffs()
        setNewStaff({ username: "", email: "", phonenumber: "", password: "" })
        setShowAddForm(false)
      } catch (err) {
        console.error("Error adding staff:", err)
      }
    }
    // get staff
    const getgroceryManagementStaffs = async () => {
      const res = await getgroceryManagementstaffsAPI()
      setStaffs(res.data.staffs)
      setStaffCount(res.data.totalstaffs)
    }
    // delet staff
  
    const handleDeleteStaff = async (id) => {
      try {
        await deletegroceryManagementstaffAPI(id);
        getgroceryManagementStaffs();
      } catch (err) {
        console.error("Failed to delete staff:", err);
      }
    };
  return (
    <>
      <AdminHeader />
      <div className="flex min-h-screen bg-gray-100">
        <Adminsidebar />
        <div className="flex-1 p-6 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Grocery Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            <button  onClick={() => {
                resetTables();
                setShowStaffTables(true)
              }}

              className="bg-white p-5 rounded-xl shadow text-left" >
              <p className="text-gray-500">Grocery-Management Staff</p>
              <h3 className="text-2xl font-bold text-indigo-600">{staffCount}</h3>
            </button>
          </div> 



          
          {showStaffTables && (
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
                        <td className="border px-4 py-2">{staff.phonenumber || '-'}</td>
                        <td className="border px-4 py-2">
                          <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                            onClick={() => handleDeleteStaff(staff._id)}>
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

export default AdminGrocery

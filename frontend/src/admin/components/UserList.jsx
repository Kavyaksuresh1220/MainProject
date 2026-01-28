import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import Adminsidebar from './Adminsidebar'
import { getAllUsersAPI } from '../../services/allAPIS'

function UserList() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    getUsers()
  }, [])
  

  const getUsers = async () => {
    try {
      const response = await getAllUsersAPI()
      console.log(response)
      setUserList(response.data.users)
    } catch (err) {
      console.error("Failed to fetch users", err)
    }
  }

  return (
    <>
      <AdminHeader />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Adminsidebar />

        <div className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              User List
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Role</th>
                    
                  </tr>
                </thead>

                <tbody>
                  {userList.length > 0 ? (
                    userList.map((user) => (
                      <tr key={user._id} className="border-b">
                        <td className="p-3">{user.username}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">{user.phonenumber || '-'}</td>
                        <td className="p-3">{user.role}</td>
                        
                        
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center p-3">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList

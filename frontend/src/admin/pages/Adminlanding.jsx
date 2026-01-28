import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Adminsidebar from '../components/Adminsidebar'
import AdminMain from '../components/AdminMain'

function Adminlanding() {
  return (
    <>
      <AdminHeader />

      
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Adminsidebar />

        
        <div className="flex-1 p-6">
          <AdminMain />
        </div>
      </div>
    </>
  )
}

export default Adminlanding

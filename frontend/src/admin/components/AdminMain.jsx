import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllUsersAPI } from '../../services/allAPIS'


function AdminMain() {
  const[count,setCount]=useState(0)
  const navigate=useNavigate()
  useEffect(()=>{
    getusercount()
  },[])

  const getusercount=async()=>{
    try {
      const response= await getAllUsersAPI()
      console.log(response);
      setCount(response.data.totalusers)

      
      
    } catch (err) {
      console.error("Failed to fetch users count", err)
      
    }
  }
  return (
    <>
    <main className="flex-1">

   
     

    
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
        <button onClick={() => navigate('/user-list')}
>
        <div className="bg-white p-6 rounded-xl shadow">

          <h3 className="text-sm text-gray-500">Total Users</h3>
        <p className="text-3xl font-bold mt-2">{count}</p>
        </div>
        </button>
      
    
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Total Staff</h3>
        <p className="text-3xl font-bold mt-2">87</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Appointments</h3>
        <p className="text-3xl font-bold mt-2">32</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-sm text-gray-500">Active Vendors</h3>
        <p className="text-3xl font-bold mt-2">14</p>
      </div>
    </section>

    
    <section id="services" class="px-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Manage Services</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Laundry Management</h3>
          <p className="text-sm text-gray-500 mb-4">Pickup & delivery</p>
          <Link to='/admin-laundry'>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Waste Management</h3>
          <p className="text-sm text-gray-500 mb-4">Eco-friendly collection</p>
          <Link to={'/admin-wastemanagement'}>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Grocery Items</h3>
          <p className="text-sm text-gray-500 mb-4">Daily essentials</p>
          <Link to={'/admin-grocerymanagement'}>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Stationery Items</h3>
          <p className="text-sm text-gray-500 mb-4">Office & school supplies</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Food Delivery</h3>
          <p className="text-sm text-gray-500 mb-4">Restaurants & meals</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Dress & Footwear</h3>
          <p className="text-sm text-gray-500 mb-4">Fashion & accessories</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Hospital Appointment</h3>
          <p className="text-sm text-gray-500 mb-4">Doctor bookings</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Medicine Delivery</h3>
          <p className="text-sm text-gray-500 mb-4">Home medicine delivery</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">Nearby Essentials</h3>
          <p className="text-sm text-gray-500 mb-4">Local services</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium">
            Manage
          </button>
        </div>

      </div>
    </section>

   
    <footer className="text-center text-sm text-gray-500 py-6 mt-8">
      © 2026 EssentialHub Admin Panel
    </footer>

  </main>
      
    </>
  )
}

export default AdminMain

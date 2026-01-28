import React, { useState } from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'

function Hospitalbookingconform() {
  const [data,setData]=useState({
    "name":"",
    "age":"",
    "gender":"",
    "phone":"",
    "description":""

  })

  const handleconfirm=()=>{
    console.log(data);
    
  }
  return (
    <>
      <Userheader />

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            Confirm Appointment
          </h1>
        </div>
      </header>

      {/* Appointment Summary */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Appointment Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p><b>Hospital:</b> City Care Hospital</p>
            <p><b>Department:</b> General Medicine</p>
            <p><b>Doctor:</b> Dr. Anil Kumar</p>
            <p><b>Date & Time:</b> Today, 10:30 AM</p>
            <p><b>Location:</b> 2 km from your location</p>
          </div>
        </div>
      </section>

      {/* Patient Details */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Patient Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="border p-3 rounded-lg w-full"
              onChange={(e)=>setData({...data,name:e.target.value})}
              
            />

            <input
              type="number"
              placeholder="Age"
              className="border p-3 rounded-lg w-full"
              onChange={(e)=>setData({...data,age:e.target.value})}
            />

            <select className="border p-3 rounded-lg w-full"
            onChange={(e)=>setData({...data,gender:e.target.value})}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-3 rounded-lg w-full"
              onChange={(e)=>setData({...data,phone:e.target.value})}
            />
          </div>

          <textarea
            placeholder="Describe your problem (optional)"
            className="border p-3 rounded-lg w-full mt-4"
            rows="4"
            onChange={(e)=>setData({...data,description:e.target.value})}
          />
        </div>
      </section>

      {/* Confirm Section */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">
              Ready to Book?
            </h3>
            <p className="text-sm text-gray-600">
              Please verify details before confirming
            </p>
          </div>

          <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          onClick={handleconfirm}>
            Confirm Appointment
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Hospitalbookingconform

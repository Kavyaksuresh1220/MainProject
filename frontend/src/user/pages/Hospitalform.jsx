import React from 'react'
import { Link } from 'react-router-dom'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'


function Hospitalform() {
  return (
    <>
    <Userheader/>
    <section class="max-w-6xl mx-auto px-6 py-6">
  <h2 class="text-xl font-semibold mb-2">Select Department</h2>
  <p class="text-sm text-gray-600 mb-4">What kind of consultation do you need?</p>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
    <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"><p class="mt-2">General</p></div>
    <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"><p class="mt-2">Cardiology</p></div>
    <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"><p class="mt-2">Orthopedic</p></div>
    <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"><p class="mt-2">Neurology</p></div>
    <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"><p class="mt-2">Pediatrics</p></div>
    <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center cursor-pointer"><p class="mt-2">Dental</p></div>
  </div>
</section>


<section class="max-w-6xl mx-auto px-6 py-6">
  <h2 class="text-xl font-semibold mb-2">Choose Doctor & Time</h2>
  <p class="text-sm text-gray-600 mb-4">Available doctors today</p>

  <div class="bg-white rounded-xl shadow p-6 space-y-4">

    <div class="flex justify-between items-center">
      <div>
        <h3 class="font-semibold">Dr. Anil Kumar</h3>
        <p class="text-sm text-gray-600">General Physician</p>
      </div>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        10:30 AM
      </button>
    </div>

    <div class="flex justify-between items-center">
      <div>
        <h3 class="font-semibold">Dr. Sneha Rao</h3>
        <p class="text-sm text-gray-600">Consultant</p>
      </div>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        12:15 PM
      </button>
    </div>

  </div>
</section>
<section class="max-w-6xl mx-auto px-6 py-8">
  <div class="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
    <div>
      <h3 class="font-semibold text-lg">Confirm Appointment</h3>
      <p class="text-sm text-gray-600">Quick, simple & secure booking</p>
    </div>
    <Link to={'/hospital-booking-conform'}>
    <button class="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
      Book Appointment
    </button>
    </Link>
  </div>
</section>

    <Footer/>
      
    </>
  )
}

export default Hospitalform

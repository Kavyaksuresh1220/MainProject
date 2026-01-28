import React from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Hospital() {
  return (
    <>
    <Userheader/>
    <section class="max-w-6xl mx-auto px-6 py-8">
  <h2 class="text-xl font-semibold mb-1">Nearby Hospitals</h2>
  <p class="text-sm text-gray-600 mb-6">Choose a hospital to book your appointment</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<Link to={'/hospital-form'}>

    <div class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
      <div class="h-32 bg-blue-50 rounded-t-xl flex items-center justify-center text-4xl">🏥</div>
      <div class="p-4">
        <h3 class="font-semibold">City Care Hospital</h3>
        <p class="text-sm text-gray-600">Multi-Specialty • 2 km</p>
        <p class="text-green-600 mt-2">⭐ 4.5 Rating</p>
      </div>
    </div>

</Link>
    <div class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
      <div class="h-32 bg-blue-50 rounded-t-xl flex items-center justify-center text-4xl">🏥</div>
      <div class="p-4">
        <h3 class="font-semibold">LifeLine Medical Center</h3>
        <p class="text-sm text-gray-600">24×7 Emergency • 3.8 km</p>
        <p class="text-green-600 mt-2">⭐ 4.3 Rating</p>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
      <div class="h-32 bg-blue-50 rounded-t-xl flex items-center justify-center text-4xl">🏥</div>
      <div class="p-4">
        <h3 class="font-semibold">Green Valley Hospital</h3>
        <p class="text-sm text-gray-600">Specialty Care • 5 km</p>
        <p class="text-green-600 mt-2">⭐ 4.6 Rating</p>
      </div>
    </div>

  </div>
</section>

    <Footer/>
      
    </>
  )
}

export default Hospital

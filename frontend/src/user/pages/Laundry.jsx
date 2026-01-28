import React from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Laundry() {
  return (
    <>
   <Userheader/>
   

    <section class="max-w-7xl mx-auto px-6 py-12">
  <h2 class="text-3xl font-bold mb-2">Choose Nearby Laundry Shop</h2>
  <p class="text-gray-600 mb-6">Select a laundry partner near your location.</p>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

    <div class="bg-white rounded-2xl p-6 shadow hover:shadow-lg border-2 border-yellow-400 cursor-pointer">
      <h4 class="font-semibold mb-1">FreshWash Laundry</h4>
      <p class="text-sm text-gray-600">📍 1.2 km • Express Available</p>
      <p class="text-sm text-gray-500">⭐ 4.6 (320 reviews)</p>
      <Link to={'/laundry-form'}>
      <button class="mt-4 w-full bg-yellow-400 py-2 rounded-lg font-medium">
        Select Shop
      </button>
      </Link>
    </div>

    <div class="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer">
      <h4 class="font-semibold mb-1">CleanCare Services</h4>
      <p class="text-sm text-gray-600">📍 2.5 km • Budget Friendly</p>
      <p class="text-sm text-gray-500">⭐ 4.4 (210 reviews)</p>
      <button class="mt-4 w-full bg-gray-100 hover:bg-yellow-400 py-2 rounded-lg">
        Select Shop
      </button>
    </div>

    <div class="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer">
      <h4 class="font-semibold mb-1">Sparkle Laundry Hub</h4>
      <p class="text-sm text-gray-600">📍 3.1 km • Premium Care</p>
      <p class="text-sm text-gray-500">⭐ 4.8 (540 reviews)</p>
      <button class="mt-4 w-full bg-gray-200 cursor-not-allowed py-2 rounded-lg">
        Closed
      </button>
    </div>

  </div>
</section>


   <Footer/>
      
    </>
  )
}

export default Laundry

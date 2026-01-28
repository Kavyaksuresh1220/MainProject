import React from 'react'
import Footer from '../../components/Footer'
import Userheader from '../components/Userheader'
import { Link } from 'react-router-dom'


function Userlanding() {
  return (
    <>
    <style>
        {
            `
            .card-hover {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-6px) scale(1.03);
      box-shadow: 0 20px 30px rgba(0,0,0,0.12);
    }`
        }
    </style>
      <Userheader/>

        <section class="max-w-7xl mx-auto px-6 py-12 bg-gray-50 text-gray-800">
    <h2 class="text-3xl font-semibold mb-2">Select the service you want</h2>
    <p class="text-gray-600 mb-8">
      Discover essential services near you — fast, reliable, and easy.
    </p>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

      <Link to={'/laundry-form'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Laundry Management</h3>
        <p class="text-sm text-gray-600">Hassle-free pickup & delivery for clean clothes.</p>
      </div>
      </Link>

      <Link to={'/wastemanagement'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Waste Management</h3>
        <p class="text-sm text-gray-600">Scheduled waste collection with eco care.</p>
      </div>
      </Link>

      <Link to={'/grocery'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Grocery Items</h3>
        <p class="text-sm text-gray-600">Daily essentials delivered from nearby stores.</p>
      </div>
      </Link>

      <Link to={'/stationary'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Stationery Items</h3>
        <p class="text-sm text-gray-600">School and office supplies at your doorstep.</p>
      </div>
      </Link>

      <Link to={'/food'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Food Delivery</h3>
        <p class="text-sm text-gray-600">Fresh meals from your favorite restaurants.</p>
      </div>
      </Link>

      <Link to={'/dressandfootwear'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Dress & Footwear</h3>
        <p class="text-sm text-gray-600">Trendy fashion and daily wear collections.</p>
      </div>
      </Link>

      <Link to={'/hospital'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Hospital Appointment</h3>
        <p class="text-sm text-gray-600">Book appointments with nearby hospitals.</p>
      </div>
      </Link>

      

      

    </div>
  </section>


      <Footer/>
    </>
  )
}

export default Userlanding

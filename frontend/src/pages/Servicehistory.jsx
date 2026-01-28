import React from 'react'
import Userheader from '../user/components/Userheader'
import { Link } from 'react-router-dom'


function Servicehistory() {
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
      <Userheader />

       <section class="max-w-7xl mx-auto px-6 py-12 bg-gray-50 text-gray-800">
    <h2 class="text-3xl font-semibold mb-2">Service History</h2>
    

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

      <Link to={'/user-laundry-history'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Laundry Management</h3>
      </div>
      </Link>

      <Link to={'/user-waste-history'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Waste Management</h3>
      </div>
      </Link>

      <Link to={'/grocery'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Grocery Items</h3>
      </div>
      </Link>

      <Link to={'/stationary'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Stationery Items</h3>
      </div>
      </Link>

      <Link to={'/food'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Food Delivery</h3>
      </div>
      </Link>

      <Link to={'/dressandfootwear'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Dress & Footwear</h3>
      </div>
      </Link>

      <Link to={'/hospital'}>
      <div class="bg-white rounded-2xl p-6 card-hover cursor-pointer">
        <h3 class="text-lg font-semibold mb-1">Hospital Appointment</h3>
      </div>
      </Link>

      

      

    </div>
  </section>
    </>
  )
}

export default Servicehistory

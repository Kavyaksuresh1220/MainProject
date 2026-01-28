import React from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Stationary() {
  return (
    <>
    <Userheader/>


    <section class="min-h-screen bg-gray-50 text-gray-800 pb-28">
  

  <section class="max-w-6xl mx-auto px-6 py-6">
    <h2 class="text-xl font-semibold mb-4">Shop by Category</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"><p class="mt-2 font-medium">Notebooks</p></div>
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"><p class="mt-2 font-medium">Pens & Pencils</p></div>
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"><p class="mt-2 font-medium">Files & Folders</p></div>
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"><p class="mt-2 font-medium">Geometry Box</p></div>
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"><p class="mt-2 font-medium">Art Supplies</p></div>
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"><p class="mt-2 font-medium">Office Items</p></div>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-6">
    <h2 class="text-xl font-semibold mb-4">Popular Stationery</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <div class="h-32 bg-gray-100 rounded mb-3 flex items-center justify-center">📒</div>
        <h3 class="font-semibold">Classmate Notebook</h3>
        <p class="text-sm text-gray-600">200 pages</p>
        <div class="flex justify-between items-center mt-3">
          <span class="font-bold">₹85</span>
          <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg">Add</button>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <div class="h-32 bg-gray-100 rounded mb-3 flex items-center justify-center">✏️</div>
        <h3 class="font-semibold">Ball Pen (Pack of 5)</h3>
        <p class="text-sm text-gray-600">Blue ink</p>
        <div class="flex justify-between items-center mt-3">
          <span class="font-bold">₹60</span>
          <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg">Add</button>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <div class="h-32 bg-gray-100 rounded mb-3 flex items-center justify-center">📁</div>
        <h3 class="font-semibold">Plastic File Folder</h3>
        <p class="text-sm text-gray-600">A4 size</p>
        <div class="flex justify-between items-center mt-3">
          <span class="font-bold">₹40</span>
          <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg">Add</button>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <div class="h-32 bg-gray-100 rounded mb-3 flex items-center justify-center">📐</div>
        <h3 class="font-semibold">Geometry Box</h3>
        <p class="text-sm text-gray-600">Complete set</p>
        <div class="flex justify-between items-center mt-3">
          <span class="font-bold">₹120</span>
          <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg">Add</button>
        </div>
      </div>
    </div>
  </section>

  <section class="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-20">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div>
        <p class="text-sm text-gray-600">3 items in cart</p>
        <p class="font-bold">₹265</p>
      </div>
      <button class="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl font-semibold text-white">
        Proceed to Checkout
      </button>
    </div>
  </section>
</section>

    <Footer/>
      
    </>
  )
}

export default Stationary

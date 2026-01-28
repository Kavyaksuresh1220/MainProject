import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Header/>

    <section class="max-w-7xl mx-auto px-6 py-14 text-center">
  <h2 class="text-4xl font-bold mb-4">Welcome to UrbanEase</h2>
  <p class="text-gray-600 max-w-2xl mx-auto">
    Your one-stop platform for essential services near you — fast, reliable, and local.
  </p>
</section>


<section class="max-w-7xl mx-auto px-6 py-10">
  <h3 class="text-2xl font-semibold mb-2 text-center">Choose a Service</h3>
  <p class="text-center text-gray-600 mb-8">
    Select a service to find trusted providers near your location
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    
    <div onclick="location.href='laundry.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">🧺</div>
      <h4 class="font-semibold">Laundry Management</h4>
      <p class="text-sm text-gray-600 mt-2">Wash, iron & dry clean services</p>
    </div>

    <div onclick="location.href='waste.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">♻️</div>
      <h4 class="font-semibold">Waste Management</h4>
      <p class="text-sm text-gray-600 mt-2">Schedule waste pickup easily</p>
    </div>

    <div onclick="location.href='grocery.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">🛒</div>
      <h4 class="font-semibold">Grocery Delivery</h4>
      <p class="text-sm text-gray-600 mt-2">Fresh groceries nearby</p>
    </div>

    <div onclick="location.href='stationery.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">✏️</div>
      <h4 class="font-semibold">Stationery Items</h4>
      <p class="text-sm text-gray-600 mt-2">School & office essentials</p>
    </div>

    <div onclick="location.href='food.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">🍔</div>
      <h4 class="font-semibold">Food Delivery</h4>
      <p class="text-sm text-gray-600 mt-2">Meals from nearby restaurants</p>
    </div>

    <div onclick="location.href='fashion.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">👗</div>
      <h4 class="font-semibold">Dress & Footwear</h4>
      <p class="text-sm text-gray-600 mt-2">Fashion from local stores</p>
    </div>

    <div onclick="location.href='hospital.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">🏥</div>
      <h4 class="font-semibold">Hospital Appointment</h4>
      <p class="text-sm text-gray-600 mt-2">Book nearby hospital visits</p>
    </div>

    <div onclick="location.href='medicine.html'"
      class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer p-6 text-center">
      <div class="text-4xl mb-3">💊</div>
      <h4 class="font-semibold">Medicine Delivery</h4>
      <p class="text-sm text-gray-600 mt-2">Medicines at your doorstep</p>
    </div>

  </div>
</section>


<section class="bg-white py-14 mt-10">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h3 class="text-2xl font-semibold mb-6">Why Choose UrbanEase?</h3>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="p-4">📍 Location-based services</div>
      <div class="p-4">✅ Verified providers</div>
      <div class="p-4">⚡ Fast booking</div>
      <div class="p-4">🔒 Secure platform</div>
    </div>
  </div>
</section>


<section class="text-center py-16">
  <h3 class="text-3xl font-bold mb-4">Everything you need, nearby</h3>
  <p class="text-gray-600 mb-6">Start exploring essential services around you</p>
  <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl">
    Explore Services
  </button>
</section>



    <Footer/>

      
    </>
  )
}

export default Home

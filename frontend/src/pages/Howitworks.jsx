import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Howitworks() {
  return (
    <>
    <Header/>

    <section class="max-w-7xl mx-auto px-6 py-14 text-center">
  <h2 class="text-4xl font-bold mb-4">How UrbanEase Works</h2>
  <p class="text-gray-600 max-w-2xl mx-auto">
    Getting essential services near you is easy and fast.
  </p>
</section>

<section class="max-w-7xl mx-auto px-6 pb-20">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

    <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <div class="text-4xl mb-4">📍</div>
      <h3 class="font-semibold mb-2">Choose Location</h3>
      <p class="text-sm text-gray-600">
        Allow location access or enter your area to find nearby services.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <div class="text-4xl mb-4">🧭</div>
      <h3 class="font-semibold mb-2">Select a Service</h3>
      <p class="text-sm text-gray-600">
        Choose from laundry, grocery, food, medicine, healthcare and more.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <div class="text-4xl mb-4">🏪</div>
      <h3 class="font-semibold mb-2">Pick Nearby Provider</h3>
      <p class="text-sm text-gray-600">
        View available shops, hospitals, or service providers near you.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <div class="text-4xl mb-4">✅</div>
      <h3 class="font-semibold mb-2">Confirm & Track</h3>
      <p class="text-sm text-gray-600">
        Book, confirm, and track your service or delivery in real time.
      </p>
    </div>

  </div>
</section>

<section class="bg-indigo-600 text-white py-16 text-center">
  <h3 class="text-3xl font-bold mb-4">Start Using UrbanEase Today</h3>
  <p class="mb-6">
    Discover trusted services right around you.
  </p>
  <a href="services.html"
     class="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
    Explore Services
  </a>
</section>


    <Footer/>
      
    </>
  )
}

export default Howitworks

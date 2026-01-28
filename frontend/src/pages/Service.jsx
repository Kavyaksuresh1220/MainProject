import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Service() {
  return (
    <>
    <Header/>


    <section class="max-w-7xl mx-auto px-6 py-12 text-center">
  <h2 class="text-4xl font-bold mb-4">Our Services</h2>
  <p class="text-gray-600 max-w-2xl mx-auto">
    Choose from a wide range of essential services available near your location.
  </p>
</section>


<section class="max-w-7xl mx-auto px-6 pb-20">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    
    <div onclick="location.href='laundry.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">🧺</div>
      <h3 class="text-lg font-semibold mb-2">Laundry Management</h3>
      <p class="text-sm text-gray-600">
        Wash, iron, and dry-clean clothes from trusted nearby laundry shops.
      </p>
    </div>

    
    <div onclick="location.href='waste.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">♻️</div>
      <h3 class="text-lg font-semibold mb-2">Waste Management</h3>
      <p class="text-sm text-gray-600">
        Schedule waste pickups and manage eco-friendly disposal easily.
      </p>
    </div>

    
    <div onclick="location.href='grocery.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">🛒</div>
      <h3 class="text-lg font-semibold mb-2">Grocery Delivery</h3>
      <p class="text-sm text-gray-600">
        Order fresh groceries from nearby stores and supermarkets.
      </p>
    </div>

    
    <div onclick="location.href='stationery.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">✏️</div>
      <h3 class="text-lg font-semibold mb-2">Stationery Items</h3>
      <p class="text-sm text-gray-600">
        Get school, college, and office stationery delivered to your home.
      </p>
    </div>

    
    <div onclick="location.href='food.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">🍔</div>
      <h3 class="text-lg font-semibold mb-2">Food Delivery</h3>
      <p class="text-sm text-gray-600">
        Discover nearby restaurants and enjoy fast food delivery.
      </p>
    </div>

    <div onclick="location.href='fashion.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">👗</div>
      <h3 class="text-lg font-semibold mb-2">Dress & Footwear</h3>
      <p class="text-sm text-gray-600">
        Shop clothes and footwear from local fashion stores.
      </p>
    </div>

    
    <div onclick="location.href='hospital.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">🏥</div>
      <h3 class="text-lg font-semibold mb-2">Hospital Appointment</h3>
      <p class="text-sm text-gray-600">
        Book doctor appointments at nearby hospitals and clinics.
      </p>
    </div>

  
    <div onclick="location.href='medicine.html'"
      class="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6">
      <div class="text-4xl mb-4">💊</div>
      <h3 class="text-lg font-semibold mb-2">Medicine Delivery</h3>
      <p class="text-sm text-gray-600">
        Order medicines online from nearby pharmacies.
      </p>
    </div>

  </div>
</section>


    <Footer/>
      
    </>
  )
}

export default Service

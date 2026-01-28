import React from 'react'
import { Link } from 'react-router-dom'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'

function Food() {
  return (
    <>
      <Userheader />
      <header className="bg-white shadow sticky top-0 z-10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-pink-600">Food Delivery</h1>

    {/* Search Bar */}
    <div className="relative hidden md:block w-1/2">
      <input
        type="text"
        placeholder="Search ..."
        className="w-full px-4 py-2 pr-14 border rounded-lg focus:ring-2 focus:ring-pink-400"
      />

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-md text-sm font-medium"
      >
        Search
      </button>
    </div>
  </div>
</header>

      <section className="min-h-screen bg-gray-50 text-gray-800 pb-28">

        {/* Back */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/user-home" className="text-sm text-gray-600 font-semibold hover:text-red-500">
            ← Back to services
          </Link>
        </div>

        {/* Restaurants */}
        <section className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-xl font-semibold mb-1">Restaurants Near You</h2>
          <p className="text-sm text-gray-600 mb-4">Select a restaurant to continue</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <Link to='/dishes'>
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <div className="h-36 bg-gray-100 rounded-t-xl flex items-center justify-center text-4xl">🍔</div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Burger House</h3>
                <p className="text-sm text-gray-600">Fast Food • 20 mins</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 font-semibold">⭐ 4.4</span>
                  <span className="text-sm">₹150 for one</span>
                </div>
              </div>
            </div>
            </Link>

            <div className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <div className="h-36 bg-gray-100 rounded-t-xl flex items-center justify-center text-4xl">🍕</div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Italiano Pizza</h3>
                <p className="text-sm text-gray-600">Pizza • 25 mins</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 font-semibold">⭐ 4.6</span>
                  <span className="text-sm">₹200 for one</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <div className="h-36 bg-gray-100 rounded-t-xl flex items-center justify-center text-4xl">🍛</div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Spice Villa</h3>
                <p className="text-sm text-gray-600">Indian • 30 mins</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 font-semibold">⭐ 4.3</span>
                  <span className="text-sm">₹180 for one</span>
                </div>
              </div>
            </div>

          </div>
        </section>

       

        {/* Checkout Bar */}
        <section className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">2 items added</p>
              <p className="font-bold">₹348</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-semibold text-white">
              Checkout
            </button>
          </div>
        </section>

      </section>

      <Footer />
    </>
  )
}

export default Food

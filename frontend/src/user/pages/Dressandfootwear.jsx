import React from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Dressandfootwear() {
  return (
    <>
      <Userheader />

      <section className="min-h-screen bg-gray-50 text-gray-800 pb-28">

        {/* Header */}
       <header className="bg-white shadow sticky top-0 z-10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-pink-600">Dress & Footwear</h1>

    {/* Search Bar */}
    <div className="relative hidden md:block w-1/2">
      <input
        type="text"
        placeholder="Search dresses, shoes, sandals..."
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


        {/* Categories */}
        <section className="max-w-6xl mx-auto px-6 py-6">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/user-home" className="text-sm text-gray-600 font-semibold hover:text-red-500">
            ← Back to services
          </Link>
        </div>
          <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: '👗', label: 'Women' },
              { icon: '👔', label: 'Men' },
              { icon: '🧒', label: 'Kids' },
              { icon: '👟', label: 'Footwear' },
              { icon: '👜', label: 'Accessories' },
              { icon: '🔥', label: 'Offers' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-2 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Trending Products</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '👗', name: 'Floral Kurti', desc: 'Cotton • Women', price: '₹799' },
              { icon: '👔', name: 'Formal Shirt', desc: 'Men • Slim Fit', price: '₹999' },
              { icon: '👟', name: 'Running Shoes', desc: 'Unisex', price: '₹1,499' },
              { icon: '🥿', name: 'Women Sandals', desc: 'Comfort Wear', price: '₹699' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-4xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">{item.price}</span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-lg">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Checkout Bar */}
        <section className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">2 items selected</p>
              <p className="font-bold">₹2,498</p>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-xl font-semibold text-white">
              Proceed to Checkout
            </button>
          </div>
        </section>

      </section>

      <Footer />
    </>
  )
}

export default Dressandfootwear

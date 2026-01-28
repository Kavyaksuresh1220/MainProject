import React from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Dishes() {
  return (
    <>
    <Userheader/>

     {/* Popular Dishes */}
        <section className="max-w-6xl mx-auto px-6">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/food" className="text-sm text-gray-600 font-semibold hover:text-red-500">
            ← Back
          </Link>
        </div>
          <h2 className="text-xl font-semibold mb-1">Popular Dishes</h2>
          <p className="text-sm text-gray-600 mb-4">After selecting a restaurant</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h3 className="font-semibold">Chicken Burger</h3>
                <p className="text-sm text-gray-600">Served with fries</p>
                <p className="font-bold mt-1">₹149</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg">
                Add
              </button>
            </div>

            <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h3 className="font-semibold">Margherita Pizza</h3>
                <p className="text-sm text-gray-600">Cheese & basil</p>
                <p className="font-bold mt-1">₹199</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg">
                Add
              </button>
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


    <Footer/>
      
    </>
  )
}

export default Dishes

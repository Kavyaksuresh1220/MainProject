import React from 'react'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'

function Grocery() {
  return (
    <>
      <Userheader />

      <div className="max-w-6xl mx-auto px-6 mt-6">
  <div className="relative">
    <input
      type="text"
      placeholder="Search for groceries, fruits, vegetables..."
      className="w-full border rounded-xl pl-5 pr-14 py-3 focus:ring-orange-400 focus:border-orange-400"
    />

    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
    >
      Search
    </button>
  </div>
</div>


      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <button className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"> Vegetables</button>
          <button className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"> Fruits</button>
          <button className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"> Dairy</button>
          <button className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"> Rice & Grains</button>
          <button className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"> Spices</button>
          <button className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"> Beverages</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-2xl font-semibold mb-6">Popular Items Near You</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
              
              className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="h-32 bg-gray-100 rounded mb-3"></div>
              <h3 className="font-semibold">milk</h3>
              <p className="text-sm text-gray-600">1 liter</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">₹555</span>
                <button className="bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-lg text-sm font-medium">
                  Add
                </button>
              </div>
            </div>
        </div>
      </section>

      <section className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">2 items added</p>
            <p className="font-bold">₹212</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold text-white">
            Proceed to Checkout
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Grocery

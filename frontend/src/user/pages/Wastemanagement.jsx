import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Userheader from '../components/Userheader'
import Footer from '../../components/Footer'

function Wastemanagement() {
  const [wasteData, setWasteData] = useState({
    service: '',
    category: '',
    quantity: '',
    date: '',
    time: ''
  })

  const navigate = useNavigate()

  const handleconfirm = () => {
    console.log(wasteData)

    if (
      !wasteData.service ||
      !wasteData.category ||
      !wasteData.quantity ||
      !wasteData.date ||
      !wasteData.time
    ) {
      alert('Please Fill The Form')
      return
    }

    try {
      navigate('/confirm-waste', {
        state: { ...wasteData, payAmount }
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getPrice = () => {
    switch (wasteData.quantity) {
      case 'Small (1–2 bags)':
        return 50
      case 'Medium (3–5 bags)':
        return 100
      case 'Large (More than 5 bags)':
        return 150
      default:
        return 0
    }
  }

  const amount = getPrice()
  const servicecharge = 150
  const payAmount = amount + servicecharge

  return (
    <>
      <Userheader />

      {/* SERVICE */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Choose Waste Management Service
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <button
            className={`rounded-2xl p-6 shadow text-left transition ${
              wasteData.service === 'Household Waste'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'hover:shadow-lg'
            }`}
            onClick={() =>
              setWasteData({ ...wasteData, service: 'Household Waste' })
            }
          >
            <h3 className="font-semibold mb-1">Household Waste</h3>
            <p className="text-sm text-gray-600">
              Daily & weekly waste pickup
            </p>
          </button>

          <button
            className={`rounded-2xl p-6 shadow text-left transition ${
              wasteData.service === 'Recyclable Waste'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'hover:shadow-lg'
            }`}
            onClick={() =>
              setWasteData({ ...wasteData, service: 'Recyclable Waste' })
            }
          >
            <h3 className="font-semibold mb-1">Recyclable Waste</h3>
            <p className="text-sm text-gray-600">
              Plastic, paper & metal recycling
            </p>
          </button>

          <button
            className={`rounded-2xl p-6 shadow text-left transition ${
              wasteData.service === 'Bulk / Special Waste'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'hover:shadow-lg'
            }`}
            onClick={() =>
              setWasteData({ ...wasteData, service: 'Bulk / Special Waste' })
            }
          >
            <h3 className="font-semibold mb-1">Bulk / Special Waste</h3>
            <p className="text-sm text-gray-600">
              Furniture, construction debris
            </p>
          </button>
        </div>
      </section>

      {/* WASTE DETAILS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Waste Details</h2>

        <div className="bg-white rounded-3xl shadow p-8 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm">Waste Category</label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              onChange={(e) =>
                setWasteData({ ...wasteData, category: e.target.value })
              }
            >
              <option value="">Select</option>
              <option>Organic</option>
              <option>Plastic</option>
              <option>Paper</option>
              <option>Metal</option>
              <option>Mixed</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm">Estimated Quantity</label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              onChange={(e) =>
                setWasteData({ ...wasteData, quantity: e.target.value })
              }
            >
              <option value="">Select</option>
              <option>Small (1–2 bags)</option>
              <option>Medium (3–5 bags)</option>
              <option>Large (More than 5 bags)</option>
            </select>
          </div>
        </div>
      </section>

      {/* PICKUP */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Pickup Schedule</h2>

        <div className="bg-white rounded-3xl shadow p-8 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm">Pickup Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              onChange={(e) =>
                setWasteData({ ...wasteData, date: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Time Slot</label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              onChange={(e) =>
                setWasteData({ ...wasteData, time: e.target.value })
              }
            >
              <option value="">Select</option>
              <option>9 AM – 12 PM</option>
              <option>12 PM – 3 PM</option>
              <option>3 PM – 6 PM</option>
            </select>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Service Summary</h2>

        <div className="bg-gray-100 rounded-3xl p-8">
          <div className="flex justify-between mb-2">
            <span>Household Waste Pickup</span>
            <span>{amount}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Eco-friendly Processing</span>
            <span>{servicecharge}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{payAmount}</span>
          </div>
        </div>
      </section>

      {/* CONFIRM */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <button
          className="bg-green-500 hover:bg-green-600 transition px-12 py-4 rounded-2xl font-bold text-lg text-white"
          onClick={handleconfirm}
        >
          Confirm Waste Pickup
        </button>
      </section>

      <Footer />
    </>
  )
}

export default Wastemanagement

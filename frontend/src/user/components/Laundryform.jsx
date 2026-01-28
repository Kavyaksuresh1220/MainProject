import React, { useState } from 'react'
import Userheader from './Userheader'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom';
import { laundryorderAPI } from '../../services/allAPIS';

function Laundryform() {

  const [formData,SetFormData]=useState({
    "service":"",
    "noofclothes":"",
    "type":"",
    "date":"",
    "time":""

  })
  
  const navigate=useNavigate()


  const handleConform=async()=>{
    console.log(formData);
    if(!formData.service || !formData.noofclothes || !formData.type || !formData.date ||!formData.time){
      alert('Please Fill The Form')
    }
    else{
      try {

        navigate('/confirm-laundry',{state:{...formData,payAmount: payAmount}})
        
        
      } catch (err) {
        onsole.log(err);
        
      }
    }
    
  }
   const getPricepercloth=()=>{
    switch(formData.service){
      case "Wash And Fold":
      return 10
    case "Wash And Iron":
      return 20
    case "Dry Cleaning":
      return 30
    case "Express":
      return 40
    default:
      return 0
    }
   }
   const totalamount=formData.noofclothes? formData.noofclothes *getPricepercloth()  : 0

   const deliveryCharge=formData.noofclothes<10? 40:0

   const payAmount=totalamount+deliveryCharge
  return (
    <>
      <Userheader/>


        <section className="max-w-5xl mx-auto px-6 py-10">
  <h2 className="text-3xl font-bold mb-6">Choose Laundry Service</h2>

  <div className="grid md:grid-cols-4 gap-6">
    <button className={`rounded-2xl p-6 shadow text-left transition ${formData.service=='Wash And Fold' ? "bg-blue-500 text-white  shadow-lg" : " hover:shadow-lg"}`} 
    onClick={()=>SetFormData({...formData,service:"Wash And Fold"})}>
      <h3 className="font-semibold mb-1">Wash & Fold</h3>
      <p className="text-sm text-gray-600">Everyday clothes care</p>
    </button>

    <button className={`rounded-2xl p-6 shadow text-left transition ${formData.service=='Wash And Iron' ? "bg-blue-500 text-white  shadow-lg" : " hover:shadow-lg"}`} 
    onClick={()=>SetFormData({...formData,service:"Wash And Iron"})}>
      <h3 className="font-semibold mb-1">Wash & Iron</h3>
      <p className="text-sm text-gray-600">Clean & wrinkle-free</p>
    </button>

    <button className={`rounded-2xl p-6 shadow text-left transition ${formData.service=='Dry Cleaning' ? "bg-blue-500 text-white  shadow-lg" : " hover:shadow-lg"}`} 
    onClick={()=>SetFormData({...formData,service:"Dry Cleaning"})}>
      <h3 className="font-semibold mb-1">Dry Cleaning</h3>
      <p className="text-sm text-gray-600">Delicate fabrics</p>
    </button>

    <button className={`rounded-2xl p-6 shadow text-left transition ${formData.service=='Express' ? "bg-blue-500 text-white  shadow-lg" : " hover:shadow-lg"}`} 
    onClick={()=>SetFormData({...formData,service:"Express"})}>
      <h3 className="font-semibold mb-1">Express</h3>
      <p className="text-sm text-gray-600">24-hour delivery</p>
    </button>
  </div>
</section>





<section className="max-w-5xl mx-auto px-6 py-10">
  <h2 className="text-2xl font-semibold mb-6">Cloth Details</h2>

  <div className="bg-white rounded-3xl shadow p-8 grid md:grid-cols-2 gap-6">
    <div>
      <label className="block mb-1 text-sm">Number of Clothes</label>
      <input
        type="number"
        min="1"
        className="w-full border rounded-lg px-4 py-2 appearance-none"
        onChange={(e)=>SetFormData({...formData,noofclothes:e.target.value})}
      />
    </div>

    <div>
      <label className="block mb-1 text-sm">Fabric Type</label>
      <select
      className="w-full border rounded-lg px-4 py-2"
  value={formData.type}
  onChange={(e)=>SetFormData({...formData,type:e.target.value})}
>
  <option value="" disabled>Select fabric type</option>
  <option>Mixed</option>
  <option>Cotton</option>
  <option>Wool</option>
  <option>Delicate</option>
</select>

    </div>
  </div>
</section>



<section className="max-w-5xl mx-auto px-6 py-10">
  <h2 className="text-2xl font-semibold mb-6">Pickup & Delivery</h2>

  <div className="bg-white rounded-3xl shadow p-8 grid md:grid-cols-2 gap-6">
    <div>
      <label className="block mb-1 text-sm">Pickup Date</label>
      <input
        type="date"
        className="w-full border rounded-lg px-4 py-2"
         onChange={(e)=>SetFormData({...formData,date:e.target.value}) }
      />
    </div>

    <div>
      <label className="block mb-1 text-sm">Time Slot</label>
      <select className="w-full border rounded-lg px-4 py-2"
      value={formData.time} 
      onChange={(e)=>SetFormData({...formData,time:e.target.value})}>
        <option value="" disabled>Select </option>
        <option>9 AM – 12 PM</option>
        <option>12 PM – 3 PM</option>
        <option>3 PM – 6 PM</option>
      </select>
    </div>
  </div>
</section>





<section className="max-w-5xl mx-auto px-6 py-10">
  <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

  <div className="bg-gray-100 rounded-3xl p-8">
    <div className="flex justify-between mb-2">
      <span>{formData.service}</span>
      <span>{totalamount}</span>
    </div>

    <div className="flex justify-between mb-2">
      <span>Pickup & Delivery</span>
      <span>{deliveryCharge}</span>
    </div>

    <hr className="my-4" />

    <div className="flex justify-between text-lg font-bold">
      <span>Total</span>
      <span>{payAmount}</span>
    </div>
  </div>
</section>


<section className="max-w-5xl mx-auto px-6 py-12 text-center">
  <button 
  className="bg-yellow-400 hover:bg-yellow-500 transition px-12 py-4 rounded-2xl font-bold text-lg" 
  onClick={handleConform}>
    Confirm & Book Laundry
  </button>
</section>




      <Footer/>
    </>
  )
}

export default Laundryform

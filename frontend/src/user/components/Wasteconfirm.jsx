import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Userheader from './Userheader'
import Footer from '../../components/Footer'
import { WasteManagementorderAPI } from '../../services/wasteManagementAPIs'

function WasteConfirm() {
  const { state } = useLocation() 
   console.log(state);
 
   const [token,setToken]=useState('')
   const[userDetails,setUserDetails]=useState({})
   
  useEffect(() => {
   const userToken = sessionStorage.getItem("token");
   const userDataString = sessionStorage.getItem("userDetails");
 
   if (userToken && userDataString) {
     try {
       const userData = JSON.parse(userDataString);
       setToken(userToken);
       setUserDetails(userData);
       console.log(userDetails);
       
     } catch (error) {
       console.error("Failed to parse userDetails:", error);
     }
   } else {
     console.log("No user data in sessionStorage");
   }
 }, []);
 
 
 const handleOrder = async () => {
   const orderData = {
     service: state.service,
     quantity: state.quantity,
     category: state.category,
     date: state.date,
     time: state.time,
     customername: userDetails.username,
     payment: "Paid",
     amount:state.payAmount
   }
 
   try {
     const result = await WasteManagementorderAPI(orderData)
     console.log(result.data)
     alert("slot Booked Successfully")
   } catch (error) {
     console.log(error)
     alert("Order failed")
   }
 }
  return (
    <>
      <Userheader />

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Confirm Your Order</h2>

       { token ?
       <div>
         {/* USER DETAILS */}
        <div className="bg-white shadow rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">Pickup Address</h3>
          <p><strong>Name:</strong> {userDetails.username}</p>
          <p><strong>Address:</strong> ABC House, Kerala</p>
          <p><strong>Phone:</strong>{userDetails.phonenumber} </p>
        </div>

        {/* ORDER DETAILS */}
        <div className="bg-white shadow rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">Laundry Details</h3>
          <p><strong>Service:</strong> {state?.service}</p>
          <p><strong>No of Clothes:</strong> {state?.quantity}</p>
          <p><strong>Fabric Type:</strong> {state.category}</p>
          <p><strong>Pickup Date:</strong> {state.date}</p>
          <p><strong>Time Slot:</strong> {state?.time}</p>
        </div>

        {/* PAYMENT */}
        <div className="bg-gray-100 rounded-2xl p-6">
          <div className="flex justify-between mb-3">
            <span>Total Amount</span>
            <span className="font-bold">₹{state.payAmount}</span>
          </div>

          <button onClick={handleOrder} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold">
            Pay Now
          </button>
        </div>
       </div>
       
      :"ERROR"}
      </section>

      <Footer />
    </>
  )
}

export default WasteConfirm

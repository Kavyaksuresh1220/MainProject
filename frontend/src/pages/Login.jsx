import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style/login.css';
import { loginAPI } from "../services/allAPIS";


function Login() {
  const [user,setUser]=useState({
    "email":'',
    "password":''
  })
  const [token,setToken]=useState()
  const navigate=useNavigate()

  const handlelogin =async()=>{
    console.log(user);
    if( !user.email || !user.password){
      alert('Please Fill The Form')
    }
    else {
      //call loginuser api
      try {
        const response = await loginAPI(user)
        console.log(response);
        if (response.status === 200) {
           setToken(response.data.token)
           sessionStorage.setItem("token",response.data.token)
           sessionStorage.setItem("userDetails",JSON.stringify(response.data.existinguser))
          
          if (response.data.existinguser.role ==="Admin") {
           
             navigate('/admin-landing')
          
          }
          else if(response.data.existinguser.role ==="Laundry-Staff") {
           
             navigate('/laundry-staff')
          
          }
          else if(response.data.existinguser.role ==="Wastemanagement-Staff") {
           
             navigate('/wastemanagement-staff')
          
          }
          else if(response.data.existinguser.role ==="Grocerymanagement-Staff") {
           
             navigate('/Grocerymanagement-staff')
          
          }
          else {
            
             alert(response.data.message)
            navigate('/user-home')
           
          }
        }
        else {
          alert(response.response.data.message);

        }
      }
      catch (err) {
        console.log(err);
      }
    }
    
  }
  return (
    <>
      

      {/* ===== Page Wrapper ===== */}
      <div className="min-h-screen flex items-center justify-center text-gray-800 relative overflow-hidden">

        <div className="animated-bg"></div>
        <div className="orb blue"></div>
        <div className="orb indigo"></div>

        <div className="square" style={{ top: "22%", left: "24%" }}></div>
        <div className="square small delay" style={{ top: "42%", left: "58%" }}></div>
        <div className="square delay" style={{ top: "66%", left: "36%" }}></div>

        <div className="absolute inset-0 bg-lines"></div>

        {/* ===== Login Card ===== */}
        <div className="relative z-10 w-full max-w-md mx-4 bg-white/70 backdrop-blur-xl
                        border border-gray-200 rounded-2xl shadow-xl p-8">

          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600
                            flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-900">
            Welcome Back
          </h2>

          <p className="text-sm text-gray-500 text-center mt-2">
  Don’t have an account yet?
  <Link
    to="/register"
    className="text-blue-600 hover:underline ml-1 inline-block"
  >
    Sign up
  </Link>
</p>


          <div className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setUser({...user,email:e.target.value})}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setUser({...user,password:e.target.value})}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition
                         py-3 rounded-lg font-medium text-white"
                         onClick={handlelogin}>
              
              Login
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1">
            <button className="bg-white hover:bg-gray-100 border border-gray-300 rounded-lg py-2">G</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Userheader() {
  const [open, setOpen] = useState(false)
    const [token, setToken] = useState('')
    const [userDetails, setUserDetails] = useState({})
  
    useEffect(() => {
    const userToken = sessionStorage.getItem('token');
    const userDataString = sessionStorage.getItem('userDetails');
  
    if (userToken && userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        setToken(userToken);
        setUserDetails(userData);
  
        console.log( userData); 
      } catch (error) {
        console.error("Failed to parse userDetails:", error);
      }
    }
  }, []);
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        <h1 className="text-2xl font-bold text-yellow-500">
          EssentialHub
        </h1>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-lg font-medium"
          >
            Profile
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-72 bg-white border rounded-lg shadow-lg p-4">
              
              <p className="font-semibold text-lg mb-2">
                {userDetails.username}
              </p>

              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium"></span> {userDetails.email}</p>
                <p><span className="font-medium"></span> {userDetails.phonenumber}</p>
                <p><span className="font-medium"></span> {userDetails.email}</p>
              </div>

              <hr className="my-3" />

              <Link to='/service-history'>
              
              <div
                className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md font-medium text-center"
              >
                Track your Services
              </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Userheader;

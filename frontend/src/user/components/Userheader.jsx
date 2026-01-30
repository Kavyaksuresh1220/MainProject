import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import ThemeToggle from '../../components/ThemeToggle'

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
      } catch (error) {
        console.error("Failed to parse userDetails:", error);
      }
    }
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow dark:shadow-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">
          EssentialHub
        </h1>

        {/* Right Section */}
        <div className="relative flex items-center gap-4">
          
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Profile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition px-4 py-2 rounded-lg font-medium text-black dark:text-gray-900"
          >
            Profile
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-full mt-3 w-72 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-900 p-4">
              
              <p className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                {userDetails.username}
              </p>

              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>{userDetails.email}</p>
                <p>{userDetails.phonenumber}</p>
              </div>

              <hr className="my-3 border-gray-200 dark:border-gray-700" />

              <Link to="/service-history">
                <div className="w-full bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 py-2 rounded-md font-medium text-center text-black dark:text-gray-900">
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

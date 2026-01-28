import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>

    <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md"></div>
      <span class="text-xl font-semibold">UrbanEase</span>
    </div>

    <ul class="hidden lg:flex gap-8 text-sm text-slate-600">
      <Link to={'/home'}><li class="hover:text-slate-900 cursor-pointer">Home</li></Link>
      <Link to={'/services'}><li class="hover:text-slate-900 cursor-pointer">Services</li></Link>
      <Link to={'/howitworks'}><li class="hover:text-slate-900 cursor-pointer">How it Works</li></Link>
      <Link to={'/contact'}><li class="hover:text-slate-900 cursor-pointer">Contact</li></Link>
    </ul>

    <div class="flex gap-3">
      <Link to={'/login'}><button class="text-slate-600 hover:text-slate-900 hidden sm:block">
        Sign in
      </button>
      </Link>
      <Link to={'/register'}>
      <button class="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800">
        Register
      </button>
      </Link>
    </div>
  </nav>
      
    </>
  )
}

export default Header

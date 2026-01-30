import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between
                    bg-white text-slate-900
                    dark:bg-slate-900 dark:text-white transition-colors duration-300">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md"></div>
        <span className="text-xl font-semibold">UrbanEase</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden lg:flex gap-8 text-sm
                     text-slate-600 dark:text-slate-300">
        <Link to="/home">
          <li className="cursor-pointer hover:text-slate-900 dark:hover:text-white">
            Home
          </li>
        </Link>
        <Link to="/services">
          <li className="cursor-pointer hover:text-slate-900 dark:hover:text-white">
            Services
          </li>
        </Link>
        <Link to="/howitworks">
          <li className="cursor-pointer hover:text-slate-900 dark:hover:text-white">
            How it Works
          </li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer hover:text-slate-900 dark:hover:text-white">
            Contact
          </li>
        </Link>
      </ul>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <Link to="/login">
          <button className="hidden sm:block
                             text-slate-600 hover:text-slate-900
                             dark:text-slate-300 dark:hover:text-white">
            Sign in
          </button>
        </Link>

        <Link to="/register">
          <button className="px-4 py-2 rounded-lg
                             bg-slate-900 text-white hover:bg-slate-800
                             dark:bg-indigo-600 dark:hover:bg-indigo-500">
            Register
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Header

import React from 'react'

function Adminsidebar() {
  return (
    <>
    <aside class="w-64 bg-white shadow-lg hidden md:block">
    <div class="p-6 text-2xl font-bold text-yellow-500">Admin Panel</div>
    <nav class="px-4 space-y-2">
      <a href="/admin-landing" class="block px-4 py-2 rounded-lg bg-yellow-100 font-medium">Dashboard</a>
      
      <a href="#" class="block px-4 py-2 rounded-lg hover:bg-gray-100 text-red-500">Logout</a>
    </nav>
  </aside>
    </>
  )
}

export default Adminsidebar

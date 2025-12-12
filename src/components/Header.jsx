import React from 'react'
import AddtoCart from './AddtoCart';

function Header() {
  return (
    <header className=" bg-purple-500 shadow-md py-4 px-6 flex justify-between items-center w-full">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white ">
        MyStore
      </h1>

    
   <nav className="hidden md:flex gap-6 text-white font-medium">
        <a href="#" className="hover:text-purple-600">Home</a>
        <a href="#" className="hover:text-purple-600">Products</a>
        <a href="#" className="hover:text-purple-600">About</a>
        <a href="#" className="hover:text-purple-600">Contact</a>
      </nav>

      {/* Cart Icon */}
      <AddtoCart />
      </header>
  )
}

export default Header
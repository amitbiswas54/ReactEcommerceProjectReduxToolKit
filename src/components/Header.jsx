import React from 'react'
import AddtoCart from './AddtoCart';
import About from '../pages/About';
import Contact from '../pages/Contact';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" bg-purple-500 shadow-md py-4 px-6 flex justify-between items-center w-full">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white ">
        MyStore
      </h1>

    
      <nav className="hidden md:flex gap-6 text-white font-medium">
        <Link to='/' className="hover:text-purple-600">Products</Link>
        <Link to='/about' className="hover:text-purple-600">About</Link>
        <Link to='/contact' className="hover:text-purple-600">Contact</Link>
      </nav>

      {/* Cart Icon */}
      <AddtoCart/>
      </header>
  )
}

export default Header
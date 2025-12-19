import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import AddtoCart from './AddtoCart'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-sky-600 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <Link to="/" onClick={() => setOpen(false)}>
            MyStore
          </Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-white font-semibold text-lg uppercase">
          <Link to="/" className="hover:text-sky-900">Products</Link>
          <Link to="/about" className="hover:text-sky-900">About</Link>
          <Link to="/contact" className="hover:text-sky-900">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <AddtoCart />

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-sky-700 text-white px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

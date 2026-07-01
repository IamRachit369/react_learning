import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-20 bg-indigo-300 text-white text-2xl font-bold">
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-indigo-100 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-indigo-100 transition-colors">
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
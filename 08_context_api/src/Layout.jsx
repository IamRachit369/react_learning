import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex items-center justify-center flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
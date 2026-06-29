import React from 'react'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children : [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
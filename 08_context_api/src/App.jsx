import React from 'react'
import UserContextProvider from './contexts/UseContextProvider'
import LoginUser from './Components/LoginUser'
import Profile from './Components/Profile'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'login',
          element: <LoginUser />
        },
        {
          path: 'profile',
          element: <Profile />
        }
      ]
    }
  ])

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
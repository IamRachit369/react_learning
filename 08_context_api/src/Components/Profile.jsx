import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Profile = () => {
  const { user, pass } = useContext(UserContext)

  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold'>Profile</h2>
      <p>Username: {user || 'No user logged in'}</p>
      <p>Password: {pass ? '********' : 'No password entered'}</p>
    </div>
  )
}

export default Profile;
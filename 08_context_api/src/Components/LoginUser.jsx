import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'

const LoginUser = () => {
  const { setUser, setPass } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setUser(username)
    setPass(password)
  }

  return (
    <div className='flex items-center justify-center h-full w-full'>
      <form onSubmit={handleLogin} className='flex flex-col gap-3 p-4 max-w-sm'>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        className='border p-2'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='border p-2'
      />
      <button type='submit' className='bg-blue-500 text-white p-2'>Login</button>
    </form>
    </div>
  )
}

export default LoginUser
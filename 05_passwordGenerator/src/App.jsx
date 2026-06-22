import React, { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
const App = () => {
  const [passWord, setpassWord] = useState("dfgdfgfd")
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const passRef = useRef(null)
  const copyPassword = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(passRef.current.value)
  },[passRef])
  const generate = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)
    {
      str += "0123456789"
    }
    if(charAllowed)
    {
      str += "!@#$%^&*()_+=:;/,.><"
    }
    for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    setpassWord(pass)

  }, [length, numAllowed, charAllowed, setpassWord])
  useEffect(()=>{generate()},[length, charAllowed, numAllowed, setpassWord])
  return (
    <div className=' flex flex-col items-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg w-full overflow-hidden mb-4 bg-gray-700 mt-1'>
        <input 
        type="text"
        value={passWord}
        className="outline-none w-full py-1 px-3 m-2 text-amber-300"
        placeholder='password'
        ref = {passRef}
        readOnly/>
        <button className='bg-blue-400 px-2 text-white' onClick={()=>{copyPassword()}}>Copy</button>
      </div>
      <div className='flex w-full items-center justify-center gap-1.5'>
        <div className='flex items-center justify-center gap-0.5'>
          <input 
          type="range" name="passLength" id="_passLength" 
          onChange={(e)=>{setlength(e.target.value)}} min = {6} max = {32}/>
          <label htmlFor="_passLength">length : {length}</label>
        </div>
        <div className='flex items-center justify-center gap-0.5'>
          <input 
          type="checkbox" name="isChar" id="_isChar" 
          onChange={()=>{setcharAllowed((prev)=>!prev)}}/>
          <label htmlFor="_isChar">characters</label>
        </div>
        <div className='flex items-center justify-center gap-0.5'>
          <input 
          type="checkbox" name="isNum" id="_isNum" 
          onChange={()=>{setnumAllowed((prev)=>!prev)}}/>
          <label htmlFor="_isNum">numbers</label>
        </div>
      </div>
      <button onClick={()=>{generate()}} className='bg-amber-500 text-amber-50 p-2 rounded-2xl mt-2 mb-3.5'>Generate</button>
    </div>
  )
}
export default App  
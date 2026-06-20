import React from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setcount] = useState(0)
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className="mbe-12 text-9xl">{count}</h1>
        <div className="flex items-center justify-center w-full h-2/6">
          <button 
          className="mr-5 border-b-blue-50 border-4 p-5 rounded-2xl"
          onClick={()=>{setcount(count+1)}
          }>
            Up</button>
          <button 
          className="ml-5 border-b-blue-50 border-4 p-5 rounded-2xl"
          onClick={()=>{
            if(count > 0 )
              {
                setcount(count-1)}
              }
          }>
            Down</button>
        </div>
    </div>
  )
}

export default App
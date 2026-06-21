import React from 'react'
import { useState } from 'react'
const App = () => {
  const [color, setcolor] = useState('blue')

  const randomColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    setcolor(`#${hex}`)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold mb-5">BG Changer</h1>
      <div className="w-1/4 aspect-square border-2 rounded-2xl mb-7" style={{ backgroundColor: color }}></div>

      <div className="flex w-full flex-1 items-center justify-center gap-4">
        <button onClick={() => setcolor('red')} className="rounded px-4 py-2 bg-red-600 text-white">RED</button>
        <button onClick={randomColor} className="rounded px-4 py-2 bg-gray-800 text-white">RANDOM</button>
        <button onClick={() => setcolor('blue')} className="rounded px-4 py-2 bg-blue-600 text-white">BLUE</button>
      </div>
    </div>
  )
}

export default App
import React from 'react'

const App = () => {
  const [passWord, setpassWord] = useState("")
  const [length, setlength] = useState(8)
  
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center">
      <h1 className="font-extrabold text-4xl mbs-4 text-center">PassWord Generator</h1>
      <div className='w-1/2 aspect-video border-2 mt-3'></div>
    </div>
  )
}

export default App  
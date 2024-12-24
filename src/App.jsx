import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const currentTime = new Date().toLocaleTimeString()
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }
  , [currentTime])
  return (
    <>
      <div className='bg-pink-400 w-screen h-screen flex items-center justify-center'>
        <div className='text-black text-9xl font-bold,'>{currentTime}</div>
      </div>
    </>
  )
}

export default App

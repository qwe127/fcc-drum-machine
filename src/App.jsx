import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrumMachine from './DrumMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DrumMachine/>
    </>
  )
}

export default App

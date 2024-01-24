import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BMIBanner from './Components/BMIBanner'
import BMImeaning from './Components/BMImeaning'
import LimitationOfBMI from './Components/LimitationOfBMI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BMIBanner/>
      <BMImeaning/>
      <LimitationOfBMI/>
    </>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Landing from './components/landingPage/Landing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Landing/>
    
    </>
  )
}

export default App

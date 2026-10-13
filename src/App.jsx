import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Landing from './components/landingPage/Landing'
import {Routes, Route, BrowserRouter}  from "react-router-dom"
import Login from './components/pages/authPages/Login'
import Signup from './components/pages/authPages/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App

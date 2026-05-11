import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'
import Navbar from './Component/navbar'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/User" element={<User/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Company</h1>
            <ul>
            <Link to="/" >Home</Link>
            <Link to="/User">User</Link>

            </ul>
           
            
        </nav>
    </div>
  )
}

export default Navbar
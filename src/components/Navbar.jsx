import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className="container">
    <div >
        <NavLink className="logo" to='/'>Karann</NavLink>
    </div>
    <ul>
        <NavLink to='/projects'><li>Projects</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
    </ul>
    <button className='btn'>light/dark</button>
   </div>
   
   </>
  )
}

export default Navbar
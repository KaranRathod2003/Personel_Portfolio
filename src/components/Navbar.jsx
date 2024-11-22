import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";

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
    <div className="menu">
      <h1><CiMenuFries /></h1>
    </div>
   </div>
   
   </>
  )
}

export default Navbar
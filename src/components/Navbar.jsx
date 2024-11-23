import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }


  return (
    <>
      <div className="container">
        <div >
          <NavLink className="logo" to='/'>Karan<span className='nav-span'>n</span></NavLink>
        </div>
        <ul>
          <NavLink to='/projects'><li>Projects</li></NavLink>
          <NavLink to='/about'><li>About</li></NavLink>
          <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
        <button className='btn'>light/dark</button>
        <div className="menu" onClick={toggleMenu}>
          <h1><CiMenuFries /></h1>
        </div>
      </div>
      {openMenu && (
        <div className="mobile-menu">
          <NavLink to='/projects' onClick={toggleMenu}><li>Projects</li></NavLink>
          <NavLink to='/about' onClick={toggleMenu}><li>About</li></NavLink>
          <NavLink to='/contact' onClick={toggleMenu}><li>Contact</li></NavLink>
        </div>
      )}

    </>
  )
}

export default Navbar
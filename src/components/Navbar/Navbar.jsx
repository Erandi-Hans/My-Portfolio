import React from 'react'
import './Navbar.css'
import logo from '../../assets/mylogo.png'
import theme_pattern from '../../assets/theme_pattern.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img  className="theme" src={theme_pattern} alt="" />
      <ul className='nav-menu'>
       <li>Home</li> 
       <li>About Me</li> 
       <li>Services</li> 
       <li>Portfolio</li> 
       <li>Contact</li> 
      </ul>
      <div className="nav-connect">Connect With Me</div>

    </div>
  )
}

export default Navbar

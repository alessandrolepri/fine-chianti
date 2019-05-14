import React from 'react'


const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="/"> HOME </a>
      </div>
      <ul id="menu">
        <li><a href="#contact">Contact</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  )
}


export default NavBar

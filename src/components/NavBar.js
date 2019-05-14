import React from 'react'


const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="/"> HOME </a>
      </div>
      <ul id="menu">
        <li><a href="/ornellaia">Ornellaia</a></li>
        <li><a href="/sassicaia">Sassicaia</a></li>
        <li><a href="/biondisanti">Biondi Santi</a></li>
        <li><a href="/fattoriadelcerro">Fattoria del Cerro</a></li>
        <li><a href="/explore">Tignanello</a></li>
      </ul>
    </nav>
  )
}


export default NavBar

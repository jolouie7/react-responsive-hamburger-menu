import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon">
          icon
        </div>
        <ul>
          <li><a href="#" className="nav-links">Home</a></li>
          <li><a href="#" className="nav-links">Services</a></li>
          <li><a href="#" className="nav-links">Products</a></li>
          <li><a href="#" className="nav-links">Contact Us</a></li>
          <li><a href="#" className="nav-links-mobile">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

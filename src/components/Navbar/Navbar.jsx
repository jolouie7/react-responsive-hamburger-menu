import React, {useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
} from "./NavbarStyles";

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <IconContext.Provider value={{color: "#fff"}}>
        <Nav>
          {/* <h1 className="navbar-logo">React</h1>
        <div className="menu-icon">
          icon
        </div>
        <ul>
          <li><a href="#" className="nav-links">Home</a></li>
          <li><a href="#" className="nav-links">Services</a></li>
          <li><a href="#" className="nav-links">Products</a></li>
          <li><a href="#" className="nav-links">Contact Us</a></li>
          <li><a href="#" className="nav-links-mobile">Sign Up</a></li>
        </ul> */}
          <NavbarContainer>
            <NavLogo>
              <NavIcon />
              ULTRA
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar

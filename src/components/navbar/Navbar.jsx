import "./Navbar.scss"
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { GiNinjaHead } from "react-icons/gi";

const Navbar = ()=> {
  const [showNav, setShowNav] = useState(false)

  return <header className="navbar">
    <div className="navbar__container wrapper">
      <a href="" className="navbar__logo" onClick={()=>setShowNav(false)}>
        <GiNinjaHead/>
      </a>
      <div className="navbar__links">
        <ul className={`${showNav ? "show" : ""} `}>
          <li onClick={()=>setShowNav(false)}>
            <a href="#home">home</a>
          </li>
          <li onClick={()=>setShowNav(false)}>
            <a href="#about">about</a>
          </li>
          <li onClick={()=>setShowNav(false)}>
            <a href="#bio">bio</a>
          </li>
          <li onClick={()=>setShowNav(false)}>
            <a href="#skills">skills</a>
          </li>
          <li onClick={()=>setShowNav(false)}>
            <a href="#projects">projects</a>
          </li>
          <li onClick={()=>setShowNav(false)}>
            <a href="#contact">contact</a>
          </li>

          <div className="navbar__phone">
            <FaPhoneAlt/>
            <span>+998334180717</span>
          </div>

        </ul>
      </div>
    </div>
  </header>
}

export default Navbar;

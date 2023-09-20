import React, { useState } from "react";
import "./navbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#portfolio">Latest Works</a>
    </p>
    <p>
      <a href="#freebie">Freebie Designs</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="logo">
        <a href="#home">OB Ogeda</a>
      </div>
      <div className="navbar__links">
        <Menu />
      </div>

      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

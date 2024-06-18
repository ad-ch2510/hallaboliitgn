import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <input type="checkbox" id="click" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="click" className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </label>

      <ul className={isChecked ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/games" className="nav-link" onClick={closeMenu}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/sponsors" className="nav-link" onClick={closeMenu}>
            Sponsors
          </Link>
        </li>
        <li>
          <Link to="/Our-team" className="nav-link" onClick={closeMenu}>
            Our Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
// import Reactt, { useState } from 'react'
// import './Navbar.css'
// import logo from '../assets/image/logo.png';
// import {Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <img src={logo} alt="" />
//       </div>

//       <input type="checkbox" id="click"/>
//       <label for="click" class="menu-btn">
//         <i class="fa-solid fa-bars"></i>
//       </label>

//       <ul>
//         <li><Link to="/" className="nav-link">Home</Link></li>
//         <li><Link to="/games" className="nav-link">Register</Link></li>
//         <li><Link to="/sponsors" className="nav-link">Sponsors</Link></li>
//         <li><Link to="/Our-team" className="nav-link">Our Team</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar

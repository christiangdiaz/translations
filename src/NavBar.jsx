import React, { useState } from 'react';
import PALogo from './PaLogo2.jpg';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavBar">
      <div className="leftContainer">
        <img src={PALogo} alt="Perfect Accent Logo" className="logo" />
        <h2 className="brandName">Perfect Accent</h2>
      </div>
      <div className={`rightContainer ${isOpen ? 'active' : ''}`}>
        <button className="navButton" onClick={() => navigate('/')}>Home</button>
        <button className="navButton" onClick={() => navigate('/AboutUs')}>About Us</button>
        <button className="navButton" onClick={() => navigate('/OurServices')}>Services</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;

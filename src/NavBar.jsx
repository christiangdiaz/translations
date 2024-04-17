import React from 'react';
import PALogo from './PaLogo2.jpg';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
        <div className="leftContainer">
            <img src={PALogo} alt="Perfect Accent Logo" className='logo'/>
            <h2 className='brandName'>Perfect Accent</h2>
        </div>
        <div className="rightContainer">
            <button className='navButton'>Home</button>
            <button className='navButton'>About Us</button>
            <button className='navButton'>Services</button>
            <button className='navButton'>Contact</button>
        </div>
    </div>
  );
};

export default NavBar;

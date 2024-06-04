import React from 'react';
import './ImgContainer.css'; 
import { useNavigate } from 'react-router-dom';

const ImgContainer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/GetStarted');

  }

  return (
    <div className="Imgcontainer">
      <p className="subtext">Fluent Communication Across Borders</p>
      <p className="subtext">Expert Translation Services in Spanish, English, and Portuguese</p>
      <button className="button" onClick={handleClick}>Get Started</button>
    </div>
  );
}

export default ImgContainer;
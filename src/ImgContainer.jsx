import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImgContainer.css';

const ImgContainer = () => {
  
  const navigate = useNavigate();
  
  return (
    <div className="Imgcontainer">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className="subtext">Fluent Communication Across Borders</p>
      <p className="subtext">Expert Translation Services in Spanish, English, and Portuguese</p>
      <button className="button" onClick={() => navigate('/GetStarted')}>Get Started</button>
    </div>
  );
}

export default ImgContainer;

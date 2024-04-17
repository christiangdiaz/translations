import React from 'react';
import './OurServices.css';
import serviceImage from './service-image.jpg'; // Replace with the path to your image

const OurServices = () => {
  return (
    <div className="services-container">
      <div className="services-image">
        <img src={serviceImage} alt="Translation Services" />
      </div>
      <div className="services-content">
        <h2>Our Translation Services</h2>
        <div className="service">
          <h3>All Translation Requests</h3>
          <p>From document translation to website localization, we handle all forms of translation to meet your needs.</p>
        </div>
        <div className="service">
          <h3>Multilingual Expertise</h3>
          <p>Our professionals specialize in Spanish, English, and Portuguese, ensuring high-quality translation services.</p>
        </div>
        <div className="service">
          <h3>Unmatched Professionalism</h3>
          <p>We pride ourselves on delivering precise and professional translations across all our services.</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="new-services-container">
      <h1>Services</h1>
      <p>We offer a wide range of services to cater to diverse client needs, ensuring accuracy, cultural relevance, and high-quality results across all types of content.</p>
      <div className="new-service-category">
        <h2>Document Translation</h2>
        <ul>
          <li>
            <strong>Medical documents:</strong>
            <ul>
              <li>Clinical trial documents</li>
              <li>Patient information leaflets</li>
              <li>Medical device manuals</li>
              <li>Pharmaceutical translations</li>
            </ul>
          </li>
          <li>
            <strong>Legal contracts and documents:</strong>
            <ul>
              <li>Court documents</li>
              <li>Patent filings</li>
              <li>Contracts and agreements</li>
              <li>Compliance documentation</li>
            </ul>
          </li>
          <li>
            <strong>Insurance policies and claims:</strong>
            <ul>
              <li>Policy documents</li>
              <li>Claims documentation</li>
              <li>Underwriting reports</li>
              <li>Risk assessment reports</li>
            </ul>
          </li>
          <li>
            <strong>Business and financial reports:</strong>
            <ul>
              <li>Annual reports</li>
              <li>Financial statements</li>
              <li>Banking documents</li>
              <li>Investment reports</li>
              <li>Technical manuals</li>
            </ul>
          </li>
          <li>
            <strong>Marketing materials:</strong>
            <ul>
              <li>Promotional flyers</li>
              <li>Press Releases</li>
              <li>Websites</li>
              <li>Brochures</li>
              <li>Infographics</li>
            </ul>
          </li>
          <li>Academic papers</li>
        </ul>
      </div>
      <div className="new-service-category">
        <h2>Certified Translations</h2>
        <ul>
          <li>Birth and death certificates</li>
          <li>Marriage certificates</li>
          <li>Divorce decrees</li>
          <li>Diplomas and transcripts</li>
          <li>Immigration documents</li>
        </ul>
      </div>
      <div className="new-service-category">
        <h2>Transcreation Services</h2>
        <ul>
          <li>Marketing and advertising content</li>
          <li>Creative writing and copywriting</li>
          <li>Brand messages and slogans</li>
        </ul>
      </div>
      <div className="new-service-category">
        <h2>Terminology Management</h2>
        <ul>
          <li>Creation of glossaries</li>
          <li>Terminology databases</li>
          <li>Consistency checks</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;

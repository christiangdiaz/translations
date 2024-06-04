import React from 'react';
import './App.css';
import NavBar from './NavBar';
import ImgContainer from './ImgContainer';
import OurServices from './OurServices';
import FAQ from './FAQ';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './GetStarted';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><NavBar/><ImgContainer/></>} />
          <Route path='/GetStarted' element={<><NavBar/><GetStarted/></>} />
          <Route path='/AboutUs' element={<><NavBar/><AboutUs/></>} />
          <Route path='/OurServices' element={<><NavBar/><OurServices/></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

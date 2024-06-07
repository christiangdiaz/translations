import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Services from './Services';
import OurServices from './OurServices';
import FAQ from './FAQ';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './GetStarted';
import MainPage from './MainPage';

import Main2 from './MainPage2';

function App() {
  return (
    <div className="App">
      <div className='Components'>
      <Router>
        <Routes>
          <Route path='/' element={<div><Main2/></div>}/>
          <Route path='/GetStarted' element={<><NavBar/><GetStarted/></>} />
          <Route path='/AboutUs' element={<><NavBar/><AboutUs/></>} />
          <Route path='/OurServices' element={<><NavBar/><Services/></>} />
        </Routes>
      </Router>
        </div>
    </div>
  );
}

export default App;

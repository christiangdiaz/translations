import React from 'react';
import './App.css';
import NavBar from './NavBar';
import ImgContainer from './ImgContainer';
import OurServices from './OurServices';  
import FAQ from './FAQ';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ImgContainer/>
        <OurServices/>
        <FAQ/>
    </div>
  );
}

export default App;

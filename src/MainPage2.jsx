import React from 'react';
import Hero from './HeroPage';
import './App2.css';
import NavBar from './NavBar';
import OurServices from './OurServices';
import FAQ from './FAQ';

function Main2() {
    return (
        <div className="MainContainer">
            <NavBar />
            <Hero />
            <OurServices />
            <FAQ/>
        </div>
    );
}

export default Main2;

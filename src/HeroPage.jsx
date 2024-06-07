import React from 'react';
import './HeroPage.css';
import PALogo1 from './PALogoFinal.jpg';
import { useNavigate } from 'react-router-dom';
import translate from './GoogleTranslate.png'
function Hero() { 
    const navigate = useNavigate();
    return(
        <div className='MainContainer'>
            <div className='HeroMain'>
                <div className='ImageContainer'>
                    <img className='IMG' src={PALogo1} alt="Logo"></img>
                    <div className="OverlayContent">
                        <p className="ImgText">Fluent Communication Across Borders</p>
                        <p className="ImgTxt">Expert Translation Services in Spanish, English, and Portuguese</p>
                        <button className="button" onClick={() => navigate('/GetStarted')}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

import React from 'react';

import '../assets/styles/Fuentes.css';


import NavBar from '../components/NavBarComponent';
import Slider from '../components/SliderComponent';
import SobreMi from '../components/SobremiComponent';
import Skills from '../components/SkillsComponent';
import Portafolio from '../components/PortafolioComponent';
import Footer from '../components/FooterComponent';



const Principal = () => {
    return(

    <div id = "main">

     <Slider/>
     <SobreMi/>
     <Skills/>
     <Portafolio/>
     

    </div>    
    );
}

export default Principal;


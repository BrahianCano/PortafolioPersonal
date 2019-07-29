import React from 'react';
import '../assets/styles/Fuentes.css'
import NavBar from '../components/NavBarComponent';
import Slider from '../components/SliderComponent';
import SobreMi from '../components/SobremiComponent';


const App = () => {
    return(
    <div id = "main">

     <NavBar/>
     <Slider/>
     <h1 className="text-center font-weight-bold mt-4 mb-5">Sobre mi</h1>
     <SobreMi/>

    </div>    
    );
}

export default App;


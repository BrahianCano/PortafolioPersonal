import React from 'react'
/*import img1 from '../assets/images/imgSlider1.jpg';
import img2 from '../assets/images/imgSlider2.jpg';
import img3 from '../assets/images/imgSlider3.jpg';*/

import '../assets/styles/SliderStylesComponent.css'


class Slider extends React.Component{
    render(){
        return(
          <div className="container-fluid bg-dark text-white style" >
              <h1 className="text-center">Front-end Developer</h1>
              <h5 className="text-center text-info">Producir sitios web Responsive de alta calidad y con una experiencia de usuario excepcional</h5>
              <button type="button" class="mt-5 btn btn-outline-light"><i class="fab fa-whatsapp"></i> Contactar ya</button>
          </div>
        );
    }
}

export default Slider;

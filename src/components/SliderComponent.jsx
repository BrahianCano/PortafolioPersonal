import React from 'react'


import '../assets/styles/SliderStylesComponent.css'


class Slider extends React.Component{
    render(){
        return(
          <div className="container-fluid text-white slider__div" >
              <h1 className="text-center">Desarrollador Front-end</h1>
              <h5 className="text-center text-info">Producir sitios web Responsive de alta calidad y con una experiencia de usuario excepcional.</h5>
               <a href = "https://api.whatsapp.com/send?phone=573122507466" target="_blank"> <button type="button" className="mt-5 btn btn-outline-light"><i className="fab fa-whatsapp"></i> Contactar ya</button></a>         
          </div>
        );
    }
}

export default Slider;

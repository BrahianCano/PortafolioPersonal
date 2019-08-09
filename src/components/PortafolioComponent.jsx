import React, { Component } from 'react'

import '../assets/styles/PortafolioStyleComponent.css';

class PortafolioComponent extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center font-weight-bold ">PORTAFOLIO</h1>
              <div className="row border rounded mb-4 mt-5 shadow-sm h-md-250">
                    <div className="col pt-4 pb-4 d-flex flex-column">
                        <strong className="d-inline-block mb-2 text-primary">REACT - JS - HTML - CSS</strong>
                        <h3 className="mb-0">Pro Music</h3>
                        <div className="mb-1 text-muted">Jun 12</div>
                        <p className="card-text mb-4 text-break">Pro music es una plataforma  web hecha con los frameworks de React y Boostrap que funciona como reproductor de música para múltiples plataformas, con las características de crear PlayList, escuchar música según el estado de ánimo, entre otras funcionalidades.</p>
                        <a href="https://eager-cray-2e7348.netlify.com/" className="stretched-link mb-2" target="_blank">Ver proyecto</a>
                    </div>
                    <div className="col d-none d-lg-block">
                       <img className = "portafolio__img float-right mt-4 mb-3" src="https://image.flaticon.com/icons/svg/254/254057.svg" alt=""/>
                    </div>
              </div>
              <div className="row border rounded mb-4 mt-5 shadow-sm h-md-250">
                    <div className="col pt-4 pb-4 d-flex flex-column">
                        <strong className="d-inline-block mb-2 text-primary">WORDPRESS</strong>
                        <h3 className="mb-0">FUDESACTI</h3>
                        <div className="mb-1 text-muted">Feb 15</div>
                        <p className="card-text mb-4 text-break">Fudesacti  es una página web informativa de la empresa “FUDESACTI SAS” hecha con el CMS de WordPress, donde se ofrecen distintos cursos y técnicas para estudiar, donde se pueden gestionar matrículas.</p>
                        <a href="https://fudesacti.com/" className="stretched-link mb-2" target="_blank">Ver proyecto</a>
                    </div>
                    <div className="col d-none d-lg-block">
                       <img className = "portafolio__img float-right mt-4 mb-3" src="https://i2.wp.com/www.fudesacti.com/wp-content/uploads/2019/03/Logo-fudesacti-.png?fit=471%2C466&ssl=1" alt=""/>
                    </div>
              </div>
            </div>
        )
    }
}

export default PortafolioComponent;

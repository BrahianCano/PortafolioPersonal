import React from 'react'

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

import '../assets/styles/SobreMiStylesComponent.css'



class SobreMi extends React.Component{
    render(){
        return(
            <div className="container">
                <hr/>
                <h1 className="text-center font-weight-bold mt-4 mb-5">SOBRE MI</h1>
                <div className = "container text-center">
                    
                    <div className="card-deck">
                        <div className="card h-50">
                            <img src={img1} className="sobreNosotros__img mx-auto" alt="..."/>
                            <div className="card-body">
                            <h3 className="card-title">Mi perfil</h3>
                            <p className="card-text">Soy un joven paisa de la ciudad de Medellín graduado de la <a target="_blank" href="https://www.ieru.edu.co/">Institución Educativa República de Uruguay</a> como Bachiller técnico en Desarrollo de software, adicionando un <b>Diplomado de Desarrollo Front-end y metodologías ágiles.</b></p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">BRAHIAN ACEVEDO</small>
                            </div>
                        </div>
                        <div className="card h-50">
                            <img src={img2} className="sobreNosotros__img mx-auto" alt="..."/>
                            <div className="card-body">
                            <h3 className="card-title">Algunas habilidades</h3>
                            <p className="card-text">
                                <li>Manejo del editor de código VisualStudioCode.</li>
                                <li>Manejo de control de versiones con Git y GitHub.</li>
                                <li>Manejo del FrameWork React.</li>
                                <li>Manejo del FrameWork Bootstrap.</li>
                                <li>Manejo CMS WordPress</li>
                            </p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">BRAHIAN ACEVEDO</small>
                            </div>
                        </div>
                        <div className="card h-50">
                            <img src={img3}  className="sobreNosotros__img mx-auto" alt="..."/>
                            <div className="card-body">
                            <h3 className="card-title">Servicios</h3>
                            <p className="card-text">
                                <li>Realizar mejoras en diseños web.</li>
                                <li>Realizar mejoras en la experiencia de usuario.</li>
                                <li>Adaptar sitios web a nuevas tecnologías.</li>
                                <li>Realizar y adaptar sitios web responsive.</li>
                            </p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">BRAHIAN ACEVEDO</small>
                            </div>
                        </div>
                        </div>
                        <hr/>
                            <script async src="https:&#x2F;&#x2F;sdk.canva.com&#x2F;v1&#x2F;embed.js"></script>
                            Mira la online <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DADhqmogdOk&#x2F;view?utm_content=DADhqmogdOk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Hoja de vida Brahian Acevedo Cano</a> 
                        <hr/>
                </div>
                </div>
        );
    }
}

export default SobreMi;
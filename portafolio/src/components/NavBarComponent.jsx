import React from 'react'

class Header extends React.Component{
    render(){

        return(
  
        <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"> Acevedo Brahian <i className="fab fa-buysellads"></i>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#sobre_mi">SOBRE MI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portafolio">PORTAFOLIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">CONTACTO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fab fa-github-square"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fab fa-whatsapp-square"></i></a>
                    </li>
                    </ul>
                </div>
            </div>     
        </nav>
        
        );
    }

}

export default Header;
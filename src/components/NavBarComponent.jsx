import React from 'react';

import '../assets/styles/NavbarStylesComponent.css';

import { Link } from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
  
        <nav id="header" className="navbar navbar-expand-lg navbar-dark navBar__nav sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/"> Brahian Acevedo  <i className="fab fa-buysellads"></i>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="sobremi">SOBRE MI</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="skills">SKILLS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="portafolio">PORTAFOLIO</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-info" href="https://api.whatsapp.com/send?phone=573122507466" target="_blank">CONTACTO</a>
                    </li>
                    </ul>
                </div>
            </div>     
        </nav>
        
        );
    }

}

export default Header;
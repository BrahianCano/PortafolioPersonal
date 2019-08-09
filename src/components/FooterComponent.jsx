import React, { Component } from 'react'

import '../assets/styles/FooterStylesComponent.css'



class FooterComponent extends Component {
    render() {
        return (
            <div>

<footer className="page-footer font-small footer__div pt-4">


<div className="container text-center text-md-left">


    <div className="row">


        <div className="col-md-6 mx-auto">


            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Brahian Acevedo</h5>
            <p>Desarrollador Front-end, siempre a su servicio.</p>

        </div>


        <hr className="clearfix w-100 d-md-none" />


        <div className="col-md-6 mx-auto">

            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">CONTACTO</h5>

            <ul className="list-unstyled">
               
                <li>
                    <a href="#!"> (+57) 312 250 74 66</a>
                </li>
                <li>
                    <a href="#!">brahianestiven08@gmail.com</a>
                </li>
                <li>
                    <a href="#!">Medellín, Colombia.</a>
                </li>
            </ul>

        </div>


        <hr className="clearfix w-100 d-md-none" />


        <hr className="clearfix w-100 d-md-none" />

    </div>

</div>
<hr />


<ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
        <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/paraprogramadoresoficial" target="_blank">
            <i className="fab fa-facebook-f"> </i>
        </a>
    </li>
    <li className="list-inline-item">
        <a className="btn-floating mx-1" href="https://www.instagram.com/paraprogramadores/  " target="_blank">
        <i className="fab fa-instagram"></i>        
        </a>
    </li>
    <li className="list-inline-item">
        <a className="btn-floating mx-1" href="https://github.com/BrahianCano/" target="_blank">
         <i className="fab fa-github-alt"></i>
        </a>
    </li>
    <li className="list-inline-item">
        <a className="btn-floating mx-1" href="https://linkedin.com/in/brahian-acevedo-cano-47906518a/" target="_blank">
            <i className="fab fa-linkedin-in"> </i>
        </a>
    </li>
   
</ul>



<div className="footer-copyright text-center py-3">© 2019 Brahian Acevedo. All Rights Reserved

</div>


</footer>
                
            </div>
        )
    }
}

export default FooterComponent

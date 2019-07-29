import React from 'react'



class SobreMi extends React.Component{
    render(){
        return(
            
            <div className="row">
            <div className="col-4 ml-4">
                <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Imformación personal</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Perfil</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                </div>
            </div>
            <div className="col-7">
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <ul class="list-group list-group-horizontal-sm">
                            <li class="list-group-item font-weight-bold">NOMBRES Y APELLIDOS COMPLETOS</li>
                            <li class="list-group-item">Brahian Stiven Acevedo Cano</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                            <li class="list-group-item font-weight-bold">DOCUMENTO</li>
                            <li class="list-group-item">cc: 1000.888.188</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                            <li class="list-group-item font-weight-bold">FECHA DE NACIMIENTO</li>
                            <li class="list-group-item">11 de abril del 2001</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                            <li class="list-group-item font-weight-bold">LUGAR DE RESIDENCIA</li>
                            <li class="list-group-item">Itagüí, Antiquia</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                            <li class="list-group-item font-weight-bold">TELÉFONO CELULAR</li>
                            <li class="list-group-item">312-250-7466</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <p>
                    Me considero un joven capaz de acatar órdenes en el ámbito laboral, con incitativa para liderar un equipo pese a las responsabilidades propuestas, bajo marcos de trabajo para desarrollo ágil de software.<br></br><br></br>
                    En aspectos de competencias laborales a través de la experiencia en el campo he adquirido la destreza del manejo de herramientas informáticas, tales como:<b> Excel, Word, Power Point, manejo de la nube de Drive, OneDrive</b> y herramientas de creación y análisis de contenido tales como: <b>WordPress, Canva, SearchConsole, GoogleAnalitics, etc.</b><br></br>
                    A través de estudios técnicos de desarrollo de software con énfasis en Front-end he adquirido las habilidades de manejo de entornos de desarrollo web. VisualStudioCode, haciendo manejo de lenguajes de programación tales como: <b>ECMAScript, Html5, Css3,</b> utilizando FrameWorks, entornos de versiones y ejecución tales como: <b>ReactJs, NodeJs, WebPack, GitHub, Bootstrap, etc.</b><br></br><br></br>
                    En aspectos personales soy una persona autónoma, puntual, pasiva con capacidad de organización y planificación, llevando un buen aspecto físico y de comportamiento en el campo laboral.

                    </p>
                </div>
                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default SobreMi;
import React from 'react'


import '../assets/styles/SkillsStyleComponent.css';


class Skills extends React.Component{
    render(){
        return(
            <div className="skills__div">
                <h1 className="text-center font-weight-bold mb-4">SKILLS</h1>
                <div className="container">
                <h5><b>JAVA SCRIPT</b></h5>
                <div className="progress">
                    <div className="progress-bar w-75 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 className="mt-4"><b>HTML5</b></h5>
                <div className="progress">
                    <div className="progress-bar w-100 bg-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 className="mt-4"><b>CSS3</b></h5>
                <div className="progress">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 className="mt-4"><b>REACT JS</b></h5>
                <div className="progress">
                    <div className="progress-bar w-75 bg-dark" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>
            </div>
        );
    }
    
}

export default Skills
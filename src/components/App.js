import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import Principal from '../containers/PrincipalComponent';
import SobreMi from '../components/SobremiComponent';
import Skills from '../components/SkillsComponent';
import Portafolio from '../components/PortafolioComponent';


const App = () => {
    return (
        
        <BrowserRouter> 
            <Layout>
                <Switch>
                    <Route exact path = "/" component={Principal} />
                    <Route exact path = "/sobremi" component={SobreMi} />
                    <Route exact path = "/skills" component={Skills} />
                    <Route exact path = "/portafolio" component={Portafolio} />


                </Switch> 
            </Layout>    
            
        </BrowserRouter>
    );
}
export default App;
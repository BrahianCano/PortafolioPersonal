import React from 'react';

import Navbar from '../components/NavBarComponent';
import Footer from '../components/FooterComponent';




const Layout = (props) =>{
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer/>
            
        </React.Fragment>
    )

}

export default Layout;
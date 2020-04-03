import React from 'react';
import '../view/css/style.css';
import * as ReactBootStrap from 'react-bootstrap';

const Rnavbar = props => {
    return( 
        <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand className='navbar-brand'href="#home">LRaposo S/A</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
    <ReactBootStrap.Nav className="nav navbar-right">
      <ReactBootStrap.Nav.Link href='/'>ABOUT </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href='/services'>SERVICES</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href='/portfolio'>PORTFOLIO</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href='/contact'>CONTACT</ReactBootStrap.Nav.Link>
     </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        
    
    )
}
export default Rnavbar;
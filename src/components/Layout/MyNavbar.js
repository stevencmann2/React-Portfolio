
import React from 'react';
import {NavLink} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {

    return(
    
    <Navbar  fixed="top" collapseOnSelect expand="lg"  variant="dark" style={styles.shadow}>
    <NavLink exact to="/" className="navbar-brand" style={styles.me}>Steven Mann</NavLink>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" style={styles.linksText}>
        <NavLink exact to="/" className="nav-item nav-link" >Home</NavLink>
        <NavLink exact to="/skills" className="nav-item nav-link" >Skills</NavLink>
        <NavLink exact to="/portfolio" className="nav-item nav-link" >Portfolio</NavLink>
        <NavLink exact to="/contact" className="nav-item nav-link" >Contact</NavLink>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    
    )
}

const styles = {
 
  shadow: {
    backgroundColor: "black",
    paddingTop: '1.5em',
    paddingBottom: '1.5em',
    boxShadow: '0 8px 6px -6px black',
    
},
me:{
  fontFamily: `'Neuton', serif`,
  fontWeight: 800,
  fontSize: '3em'
},
linksText:{
  fontFamily: `'Neuton', serif`,
  fontWeight: 400,
}

}

export default MyNavbar;





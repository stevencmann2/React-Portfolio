
import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false);

    return(
    
    <Navbar expanded={expanded} fixed="top" collapseOnSelect expand="lg"  variant="dark" style={styles.shadow}>
    <NavLink exact to="/" className="navbar-brand" style={styles.me}>Steven Mann</NavLink>
    <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" style={styles.linksText}>
        <NavLink exact to="/" className="nav-item nav-link" onClick={() => setExpanded(false)}>Home</NavLink>
        <NavLink exact to="/skills" className="nav-item nav-link" onClick={() => setExpanded(false)}>Skills</NavLink>
        <NavLink exact to="/portfolio" className="nav-item nav-link" onClick={() => setExpanded(false)}>Portfolio</NavLink>
        <NavLink exact to="/contact" className="nav-item nav-link" onClick={() => setExpanded(false)}>Contact</NavLink>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    
    )
}

const styles = {
 
  shadow: {
    backgroundColor: "black",
    paddingLeft: '4em',
    paddingRight: '4em',
    boxShadow: '0 8px 6px -6px black',
    
  },
  me:{
    fontFamily: `'Abril Fatface', cursive`,
    color: 'white',
    fontSize: '3em'
  },
  linksText:{
    fontFamily:`'Poppins', sans-serif`,
    fontWeight: 700
  }

}

export default MyNavbar;





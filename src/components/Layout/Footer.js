import React from 'react'
import { NavLink} from "react-router-dom";
import { Col, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from '../../assets/pdf/Steven-Mann-Resume.pdf'


const Footer = () => {

    return(
              <footer className="navbar" variant ="dark" style={styles.footerContainer}>
                <Container className="text-center text-light">
                       
                        <Col xs={4} sm={4} md={4} large={4} xl={4} >
                            <NavLink exact to="/" className="navbar-brand" style={styles.me}> &copy; Steven Mann</NavLink>   
                        </Col>
                        

                        <Col xs={4} sm={4} md={4} large={4} xl={4} >
                            <Nav className="ml-auto">
                                <NavLink exact to="/" className="nav-item nav-link" style={styles.linksText}>Home</NavLink>
                                <NavLink exact to="/skills" className="nav-item nav-link" style={styles.linksText}>Skills</NavLink>
                                <NavLink exact to="/portfolio" className="nav-item nav-link" style={styles.linksText}>Portfolio</NavLink>
                                <NavLink exact to="/contact" className="nav-item nav-link" style={styles.linksText}>Contact</NavLink>
                            </Nav>
                        </Col>
                        <Col className="d-flex justify-content-around" xs={4} sm={4} md={4} large={4} xl={4} >
                            <a href="https://github.com/stevencmann2">
                                <FontAwesomeIcon style={styles.logo} icon={['fab', 'github']}/>
                            </a>
                            <a href="https://www.linkedin.com/in/steven-mann-b54494a6/">
                                <FontAwesomeIcon style={styles.logo} icon={['fab', 'linkedin-in']}/>
                            </a>
                            <a href={Resume} download>
                                <FontAwesomeIcon style={styles.logo} icon="file-alt"/>
                            </a>
                            <a href="/contact">
                                <FontAwesomeIcon style={styles.logo} icon="envelope"/>
                            </a>
                        </Col>
               
                </Container> 
            </footer>
           
    )
}

const styles = {
    footerContainer:{
        backgroundColor: "black",
    },
    me:{
        fontFamily:`'Poppins', sans-serif`,
        fontWeight: 700,
        fontSize: '0.8em',
        color: 'white', 
      },
      linksText:{
        fontFamily:`'Poppins', sans-serif`,
        fontWeight: 700,
        fontSize: '0.8em',
        color: 'white'
      },
    logo: {
        height: '1.5em',
        width: '1.5em',
        color: "white"
    },
    
}


export default Footer;
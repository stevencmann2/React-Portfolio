import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutCard from '../Design/AboutCard';
import Headshot from '../Design/Headshot';
import '../../assets/css/home.css';
import Pattern from '../../assets/images/Backgrounds/pattern.png';


const AboutMe = () => {


    return(
        
            <div id="about" style={{backgroundImage: `url(${Pattern})`}}>
                <Container style={styles.screenContainer}> 

                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                        <Row>
                            <Col>
                                <h1 style={styles.header}>Hi there!</h1>
                                <hr style={styles.line}/>
                            </Col>
                        </Row>

                        <Card style={styles.cardContainer} >
                            <Card.Body>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={8} style={styles.colWrapper}>
                                        <AboutCard />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={4} style={styles.colWrapper}>
                                    <Headshot imageSource={require('../../assets/images/Personal/Balcony.JPG')}/> 
                                </Col>
                                </Row>
                                
                        </Card.Body>
                        </Card>
                    </ScrollAnimation>
                    <Row className="justify-content-center m-5"> 
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <Image src={require('../../assets/images/Icons/NodeLogo.svg')} alt="Node logo" style={styles.logo} />
                            <Image src={require('../../assets/images/Icons/react.png')} alt="React logo" style={styles.logo} />
                            <Image src={require('../../assets/images/Icons/javascript.png')} alt="Javascript logo"  style={styles.logo} />
                        </ScrollAnimation>
                    </Row>
                </Container>
            </div>
      
        
       
    )
}

const styles ={
    aboutWrapper: {
        backgroundColor:'#132745',
    },
    screenContainer: {
         paddingTop: '4em',
        paddingBottom: '6em',
        // paddingLeft: '6em',
        // paddingRight: '6em'
    },
    cardContainer:{
        boxShadow: '0 8px 6px -6px black',
        backgroundColor: '#b0bdd4',
        padding: '1.25rem',
        marginTop: '2em'   
    },
    header: {
        color: 'white',
        fontFamily: `'Abril Fatface', cursive`,
        
    },
    line: {
        width: '5em',
        border: '0.1em solid white',
        marginLeft: 0,
        marginBottom: '1.5em'
    },
    logo: {
        height: '4em',
        size: '4em',
        margin: '1em'
    },
    colWrapper: {
        marginBottom: "2em"
    }


};

export default AboutMe;
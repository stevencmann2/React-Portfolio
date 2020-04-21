import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import AboutCard from '../Design/AboutCard'
import Headshot from '../Design/Headshot'
import '../../assets/css/home.css'
import { CardBody } from 'react-bootstrap/Card';

const AboutMe = () => {


    return(
        
            <div className=".img-fluid wallpaper" id="about" style={styles.aboutWrapper}>
                <Container style={styles.screenContainer}> 
                <Card style={styles.cardContainer} id="mySkills">
                    <Card.Body>
                    <Card.Title>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                            <h1 style={styles.header}>About Me</h1>
                            <hr style={styles.line}/>
                        </ScrollAnimation> 
                    </Card.Title>
                    <Card.Text>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={8} xl={8} style={styles.colWrapper}>
                            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                                <AboutCard />
                            </ScrollAnimation>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} style={styles.colWrapper}>
                            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                                <Headshot imageSource={require('../../assets/images/Personal/Balcony.JPG')}/> 
                            </ScrollAnimation>
                        </Col>
                        </Row>
                        </Card.Text> 
                </Card.Body>
                </Card>
                    <Row className="justify-content-center m-5"> 
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <Image src={require('../../assets/images/Icons/NodeLogo.svg')} style={styles.logo} />
                            <Image src={require('../../assets/images/Icons/react.png')} style={styles.logo} />
                            <Image src={require('../../assets/images/Icons/javascript.png')} style={styles.logo} />
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
        paddingTop: '7em',
        paddingBottom: '10em',
    },
    cardContainer:{
        boxShadow: '0 8px 6px -6px black',
        backgroundColor: '#b0bdd4',
        padding: '1.25rem'    
    },
    header: {
        color: 'black'
    },
    line: {
        width: '5em',
        border: '0.1em solid #560c6b',
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


}

export default AboutMe;
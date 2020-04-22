import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-scroll'
import '../../../assets/css/home.css'


const HomeBanner = props => {

    const [clicked, setClicked ] = useState('none')
    const fadeInTop = useSpring({
        config: {duration: 1000},
        from: {opacity: 0, marginTop: -80},
        to: {opacity: 1, marginTop: 0},
    })

    const MouseDownHandler = (e) => {
        if (e.type === 'mousedown'){
            setClicked('black')
        }
    }

    const MouseUpHandler = (e) => {
        if (e.type === 'mouseup'){
            setClicked(!clicked)
        }
    }

    return (
        <div className=".img-fluid wallpaper" 
             style={{backgroundImage: `url(${require(`../../../assets/images/Backgrounds/${props.background}`)})`,
                    height: '45em'}}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <animated.div style={fadeInTop}>
                            <div style={styles.brand}>
                                <h1 style={styles.header}>Full Stack Web Developer</h1>
                                <hr style={styles.line}/>
                                <h2 style={styles.subHeader}>Bridging user experience with clients needs. </h2>
                            </div>
                        </animated.div> 
                    </Col>
                </Row>
                <Row>
                    <Link to='about' smooth={true} duration={2000} >
                        <div className="custom-button" style={{backgroundColor: clicked}} onMouseDown={MouseDownHandler} onMouseUp={MouseUpHandler}>
                            <h4 style={styles.buttonText}>About Me</h4>   
                        </div>
                    </Link>
                </Row>
            </Container>
        </div>
    )
}




const styles = {
    line: {
        width: '5em',
        border: '0.1em solid #560c6b',
        marginLeft: 0
    },
    brand: {
        marginTop: '18%',
        color: 'white'
    },
    header: {
       color: 'white'
    },
    subHeader: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: '1.5em',
        marginTop: '1.5em',
        marginBottom: '2em'
    },
    logo: {
        height: '4em',
        size: '4em',
        margin: '1em'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',    
    }
}
export default HomeBanner; 
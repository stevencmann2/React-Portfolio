import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-scroll'
import '../../../assets/css/home.css'




const Banner = props => {

    const [clicked, setClicked ] = useState('none')
    const [clicked2, setClicked2 ] = useState('none')


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

    const MouseDownHandler2 = (e) => {
        if (e.type === 'mousedown'){
            setClicked2('black')
        }
    }

    const MouseUpHandler2 = (e) => {
        if (e.type === 'mouseup'){
            setClicked2(!clicked2)
        }
    }

    // style={{backgroundImage: `url(${Hey})`}}

    return (
        <div className=".img-fluid wallpaper" 
            style={{height: '45em', 
                backgroundImage: `url(${require(`../../../assets/images/Backgrounds/${props.background}`)})`}}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <animated.div style={fadeInTop}>
                            <div style={styles.brand}>
                                <h1 style={styles.header}>
                                    {props.header}
                                </h1>
                                <hr style={styles.line}/>
                                <div style={styles.subDiv}>
                                    <h2 style={styles.subHeader}>
                                        {props.subHeader}
                                    </h2>
                                    {props.subHeader2 ? (<h3 style={styles.subHeader2}>{props.subHeader2}</h3>):(null)}
                                </div>
                            </div>
                        </animated.div> 
                    </Col>
                </Row>
                <Row>
                    <Link to={props.destination} smooth={true} duration={2000} >
                        <div className="custom-button" style={{backgroundColor: clicked}} onMouseDown={MouseDownHandler} onMouseUp={MouseUpHandler}>
                            <h4 style={styles.buttonText}>{props.buttonTitle}</h4>   
                        </div>
                    </Link>
                    {props.destination2 && props.buttonTitle2 ? (
                    <Link to={props.destination2} smooth={true} duration={1800} >
                        <div className="custom-button2 ml-3" style={{backgroundColor: clicked2}} onMouseDown={MouseDownHandler2} onMouseUp={MouseUpHandler2}>
                            <h4 style={styles.buttonText}>{props.buttonTitle2}</h4>   
                        </div>
                    </Link>
                    ): (null)}
                </Row>
            </Container>
        </div>
    )
}




const styles = {
   
    line: {
        width: '5em',
        border: '0.1em solid white',
        marginLeft: 0
    },
    brand: {
        marginTop: '18%',
        color: 'white'
    },
    header: {
        fontFamily: `'Abril Fatface', cursive`,
    },
    subDiv:{
        marginTop: '1.5em',
        marginBottom: '2em'
    },
    subHeader: {
        fontFamily: `'Poppins', sans-serif`,
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: '1.5em',
    },
    subHeader2: {
        fontFamily: `'Poppins', sans-serif`,
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: '1.5em',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: 500   
    }
}
export default Banner; 
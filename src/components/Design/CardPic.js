import React, { useState } from 'react';
import {Card, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactCardFlip from 'react-card-flip';


const CardPic = props => {

    const [flipped, setFlipped] = useState(false)

    const clickHandler = (e)=> {
        e.preventDefault();
        setFlipped(!flipped)
      }

    
    return(
        <div style={styles.wrapper}>
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" 
                flipSpeedFrontToBack={2}
                flipSpeedBackToFront={2}>
                <Card className="bg-dark text-white text-center justify-content-center align-items-center" 
                    style={props.style} onClick={clickHandler}>
                    <Card.Img src={props.image} alt={props.title} style={styles.imageContainer}/>
                </Card>
                <Card className="bg-dark text-white text-center align-items-center justify-content-center" 
                    style={props.style} onClick={clickHandler}>
                    <Card.Body className="d-flex flex-column align-items-center justify-content-around">
                        <div>
                            <Card.Title>
                                {props.title}
                            </Card.Title>
                            <Card.Subtitle style={styles.subtitle}>
                            {props.localIcons ? 
                                    (props.localIcons.map((logo, index) =>
                                        <Image  src={require('../../assets/images/Icons'+ logo)} style={styles.logo} key={index}/>)):(null)}
                            </Card.Subtitle>
                        </div>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <div>
                            <FontAwesomeIcon onClick={()=>window.open(props.github)} style={styles.logo} icon="code" />
                            {props.demo ? (
                                <FontAwesomeIcon onClick={()=>window.open(props.demo)} style={styles.logo} icon="eye"/>)
                                : (null)}
                        </div>
                    </Card.Body>
                </Card>
            </ReactCardFlip>
      </div>
  
    )
}


const styles={
    wrapper : {
        margin: '2em'
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        boxShadow: '0 8px 6px -6px black',
        borderRadius: '55px 55px 55px 55px',
        
    },
    logo: {
        height: '2em',
        width: '2em',
        color: 'white',
        margin: '0.4em'   
    },
    subtitle: {
        marginTop: '1em'
    }
   
    
}

export default CardPic;
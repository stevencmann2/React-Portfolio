import React from 'react';
import { Image } from 'react-bootstrap'



const Headshot = props => {

    return(
        <div style={styles.divContainer}>
            <Image 
                src={props.imageSource} 
                style={styles.imageContainer}
                fluid
                alt="Mexico City Balcony"/>
        </div>
    )

}

const styles = {
    divContainer: {
        border: '1em solid white',
        borderRadius: '1em',
        position: 'relative',
        overflow: 'hidden'

    },
    imageContainer: {
     
    }
}

export default Headshot;

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'


const ProfileCarousel = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
    
        <Carousel  
            activeIndex={index} 
            controls={false}
            interval={6000}
            onSelect={handleSelect} 
            style={styles.carouselContainer}>

            <Carousel.Item style={styles.imgContainer}>
                <img
                className="d-block w-100"
                src={require("../../assets/images/Personal/Balcony.JPG")}
                alt="Blacony photo - Mexico City 2020 "
                />
            </Carousel.Item>

            <Carousel.Item style={styles.imgContainer}>
                <img
                className="d-block w-100"
                src={require("../../assets/images/Personal/Fiesta.JPG")}
                alt="George's Birthdday"
                />
            </Carousel.Item>
            
            <Carousel.Item style={styles.imgContainer}>
                <img
                className="d-block w-100"
                src={require("../../assets/images/Personal/ParquedeMexico.JPG")}
                alt="Mexico City - Parque de Mexico"
                />
            </Carousel.Item>

            <Carousel.Item style={styles.imgContainer}>
                <img
                className="d-block w-100"
                src={require("../../assets/images/Personal/Cottonwood.jpg")}
                alt="Heapin Helpin Cottonwood"
                />
            </Carousel.Item>

     
         </Carousel>
        
        
      );
}

const styles = {

    imgContainer : {
        height: '50vh',
    },
    carouselContainer: {
        height: "50vh",
        width: "50vh",
        borderRadius: '55px 55px 55px 55px',
        // borderRadius: '90%',
        overflow: 'hidden'
    }
}


export default ProfileCarousel;
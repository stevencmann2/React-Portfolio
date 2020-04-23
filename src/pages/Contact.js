import React from 'react';
import ContactForm from '../components/Design/ContactForm'
import { Container } from 'react-bootstrap'
import Pattern from '../assets/images/Backgrounds/pattern.png'
import '../assets/css/home.css'

const Contact = () => {

    return(
    <div style={styles.backDrop}>
        <Container style={styles.screenContainer}>
            
            <ContactForm />
        </Container>
    </div>
    )
}

const styles = {

    screenContainer: {
        paddingTop: '10em',
        paddingBottom: '10em',
    },
    backDrop: {
       backgroundImage: `url(${Pattern})`
    }
}

export default Contact;
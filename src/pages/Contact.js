import React from 'react';
import ContactForm from '../components/Design/ContactForm'
import { Container } from 'react-bootstrap'
import '../assets/css/home.css'

const Contact = () => {

    return(
    <div className=".img-fluid wallpaper" style={styles.backDrop}>
        <Container style={styles.screenContainer}>
            <h1>Let's Connect</h1>
            <div>   
                <p>Please send an email to stevencmann2@gmail.com or fill out the form below</p>
            </div>
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
       backgroundColor: '#b9dffa'
    }
}

export default Contact;
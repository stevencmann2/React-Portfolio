import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Row, Col, Button, Alert, Spinner, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

const ContactForm = () => {

    const [validation, setValidation] = useState(false);
    const [emailText, setEmailText] = useState("")
    const [nameText, setNameText] = useState("")
    const [companyText, setCompanyText] = useState("")
    const [Reason, setReason] = useState()
    const [messageText, setMessageText] = useState("")
    const [showSpinner, setShowSpinner] = useState(false)
    const [showInternalErrorAlert, setShowInternalErrorAlert] = useState(false)
    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)

    const emailHandler =(e)=>{
        setEmailText(e.target.value) 
    }
    const nameHandler =(e)=>{
        setNameText(e.target.value) 
    }
    const companyHandler =(e)=>{
        setCompanyText(e.target.value) 
    }
    const handleReason= (e) =>{
        setReason(e.target.value)   
    }
    const handleMessage= (e) =>{
      setMessageText(e.target.value)   
  }
    
  const formCheck = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) { 
      event.preventDefault();
      event.stopPropagation();
      setShowErrorAlert(true)
    }

    if (form.checkValidity() === true){
    setValidation(true) 
    setShowSpinner(true)
    sendEmail(event);
    }
  };
  


const sendEmail = (event) => {

  event.preventDefault();


 let templateParams = {
    user_name: nameText,
    user_email: emailText,
    user_company: companyText,
    reason: Reason, 
    message: messageText
  }

    emailjs.send('stevensgmail', 'contact_form', templateParams, 'user_iE2OnCTdGFWesLXzFqm3O')
      .then((result) => {
          console.log(result.text);
          setShowErrorAlert(false);
          setSuccessAlert(true);
          setValidation(false)
          clearForm();
          setShowSpinner(false);

      }, 
      (error) => {
          console.log(error.text);
          setShowInternalErrorAlert(true)
          setValidation(false)
          clearForm();
          setShowSpinner(false)
          

      });
     
  }

  const clearForm = () => {
    setNameText("");
    setEmailText("");
    setMessageText("");
    setReason("");
    setCompanyText("");
  }
  

  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
    
      <Row>
        <Col>
            <h1 style={styles.header}>
              Contact Me
            </h1> 
           <hr style={styles.line}/>
        </Col>
      </Row>
      <div>
      {showErrorAlert ? (
        <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
          <Alert.Heading style={styles.alertTitle}>Incomplete Attempt</Alert.Heading>
            <p style={styles.alertBody}>
              It looks like you were trying to contact Steven, but did not complete the form. 
              Please make sure all fields are filled out completely to ensure your message is delivered. 
            </p>
      </Alert>
      ) : (null)}

      {showInternalErrorAlert ? (
        <Alert variant="danger" onClose={() => setShowInternalErrorAlert(false)} dismissible>
          <Alert.Heading style={styles.alertTitle}>ERROR: Unable to Send</Alert.Heading>
            <p style={styles.alertBody}>
              I apoligize for the inconvenience, it appears there was an internal error while attempting to send your message. Please send an email directly to stevencmann2@gmail.com
              for the time being while this issue is being resolved. 
            </p>
      </Alert>
      ) : (null)}

      {successAlert ? (
        <Alert variant="success" onClose={() => setSuccessAlert(false)} dismissible>
          <Alert.Heading style={styles.alertTitle}>Message Sent</Alert.Heading>
            <p style={styles.alertBody}>
              Thank you for your message! I will respond as promptly as I can, please expect an email from stevencmann2@gmail.com. 
            </p>
      </Alert>
      ) : (null)}
      
      </div>

    <Card style={styles.cardContainer}>
    <Card.Body>
      
    <Form validated={validation} onSubmit={formCheck}>
        <Row>
            <Col xs={12} sm={12} md={6} large={6} xl={6} >

                <Form.Group controlId="contactForm.Name"  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="name" placeholder="John Smith" 
                        value={nameText} onChange={nameHandler} />  
                </Form.Group>

                <Form.Group controlId="contactForm.Email"  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="address@service.com"  
                        value={emailText} onChange={emailHandler}/>
                </Form.Group>

                <Form.Group controlId="contactForm.Company" >
                    <Form.Label>Company</Form.Label>
                    <Form.Control required type="company" placeholder="Company Name" 
                        value={companyText} onChange={companyHandler}/>
                </Form.Group>

                <Form.Group controlId="contactForm.Reason">
                  <Form.Label>Reason for Contact</Form.Label>
                    <Form.Control required as="select" value={Reason} onChange={handleReason}>
                      <option value=""></option>
                      <option value="Business Oppurtunity">Business Opportunity</option>
                      <option value="Prospective Employer">Prospective Employer</option>
                      <option value="Introduction">Just Wanted to Introduce Myself</option>
                      <option value="Personal">Personal</option>
                      <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>

            </Col>

            <Col xs={12} sm={12} md={6} large={6} xl={6} >
                <Form.Group controlId="contactForm.Message">
                  <Form.Label>Message</Form.Label>
                   <Form.Control required as="textarea" rows="10"  
                      value={messageText} onChange={handleMessage}
                      style={styles.messageBox}/>
                </Form.Group>
            </Col>

        </Row>
        
        <Row>
          <Col xs={12} sm={12} md={12} large={12} xl={12}>
            <Button variant="success" size="lg" type="submit" style={styles.buttn} block>
              {showSpinner ? (<Spinner animation="border" variant="success" />):( `Send`)}  
            </Button>
          </Col>
        </Row>

  </Form>
  </Card.Body>
  </Card>
  </ScrollAnimation>
    
  );
}


const styles = {
  messageBox: {
    height: '40vh',
    resize: 'none'
  },
  cardContainer:{
    boxShadow: '0 8px 6px -6px black',
    backgroundColor: '#b0bdd4',
    padding: '1.25rem',
    marginTop: '2em' ,
    fontFamily:`'Poppins', sans-serif`,
    fontWeight: 400    
},
header: {
  marginTop: '1em',
  color: 'white',
  fontFamily: `'Abril Fatface', cursive`,
},
alertBody:{
  fontFamily:`'Poppins', sans-serif`,
  fontWeight: 400 
},
alertTitle: {
  fontFamily:`'Poppins', sans-serif`,
  fontWeight: 700 
},
line: {
  width: '5em',
  border: '0.1em solid white',
  marginLeft: 0,
  marginBottom: '1.5em'
},
buttn:{
  marginTop: '1em'
}
}

export default ContactForm;

import React from 'react';


const AboutCard = () => {

    return(
        <div>
             <div style={styles.text}>
             
             My name is Steven Mann, I am a Junior Web Developer at Love Advertising in Houston, Texas. In this role, I assist the digital team with a variety of services, including web content updates, client site maintenance, development/deployment of email campaigns, creation/development of landing pages, publishing blogs, and reporting for web and email clients. Platforms and programs I continually work with include various CMS programs (Drupal, WordPress, ModX), ESP’s (Salesforce Marketing Cloud, Marketo Engage, MailChimp and Fishbowl), Litmus Builder and Email on Acid, Google Analytics and Tag Manager, Photoshop, and various web development languages (HTML, CSS, Javascript, PHP).
             <br />
             <br />
            
             In a recent project, I helped migrate ESP’s for a select restaurant client where I was able to help save marketing dollars through list sanitation. This process involved multiple subscriber lists across multiple brands totaling over 300k+ contacts. The migration included account setup, data backup, list sanitizing, migrating automations, branding profile landing pages, GDPR compliance and various integrations. The final step in the process included a holistic look at the client’s email program, including analysis of key performance indicators, subject line analysis, YOY list growth and email content analysis. 
             <br/>
             <br/>
             I now serve as Love Advertising's lead email developer. My key responsibilities include lead email development for various clients across numerous categories (oil & gas, restaurant, retail, home builders, etc.), all B2C and B2B communications for a large oil & gas corporation, development of interactive engagement emails, reporting and analysis of email programs, automation logic and maintenance, and data management for all email clients. To see some of my recent email development, click <a href="https://github.com/stevencmann2/stevencmann2/blob/master/README.md#user-content-interactive-email-development" target="_blank">here</a>. 
          
             
             </div>
        </div>
    )
}
 
const styles={
    text: {
        color: 'black',
        fontFamily:`'Poppins', sans-serif`,
        fontWeight: 200
    }
}

export default AboutCard;
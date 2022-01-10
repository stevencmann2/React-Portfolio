import React from 'react';


const AboutCard = () => {

    return(
        <div>
             <div style={styles.text}>
             
             My name is Steven Mann, a Junior Web Developer at Love Advertising in Houston, Texas. In this role, I assist our digital team with a variety of services, including web content updates, client site maintenance, development/deployment of email campaigns, creation/development of landing pages, publishing blogs, and reporting for web and email clients. Platforms and programs I continually work with include various CMS programs (Drupal, WordPress, ModX), ESP’s (SFMC, MailChimp, Fishbowl), Litmus Builder and Email on Acid, Google Analytics and Tag Manager, Photoshop, and various web development languages (HTML, CSS, Javascript, PHP).
             <br />
             <br />
            
             In a recent project, I helped migrate ESP’s for a select client where I was able to help save marketing dollars through list sanitation. This process involved multiple subscriber lists across multiple brands totaling over 300k contacts. The migration included account setup, data backup, list sanitizing, migrating automations, branding profile landing pages, and various integrations. The final step in the process included a holistic look at the client’s email program, including analysis of key performance indicators, subject line analysis, YOY list growth and email content analysis.
          
             
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
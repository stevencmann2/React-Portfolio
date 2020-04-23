import React from 'react';


const AboutCard = () => {

    return(
        <div>
             <div style={styles.text}>
             
             My name is Steven Mann, an aspiring web developer in Houston, TX, proficient in several technolgoies, with a focus on Javascript, React, and Node.js. 
             I have experience building, designing and styling personal websites using various languages and tools like HTML, CSS and JQuery to design fully functional web platforms, including this portfolio. 
             In previous work experience, I was able to utilize and merge client inventory into a proprietary application, giving the client the ability to view, order and maintain inventory. 
            I am passionate about working in collaborative environments to merge functionality with creativity, ensuring optimal results for user-centered designs. 
     
             <br />
             <br />
            
             When I am not working on my career, I enjoy writing, recording and performing music across the state of
             Texas.
             I perform in several local bands and enjoy playing genres from country and americana to blues and rock.
             I
             have opened
             for acts such as Kyle Hollingsworth, Dumpstafunk, Naughty Professor, George Porter Jr., Organ Freeman
             and
             The Texas Gentlemen.
             I am also an outdoor enthusiast - I enjoy biking, fishing, hiking and camping. On my most recent camping trip, I
             traveled to Lost Maples
             just outside of San Antonio, TX, where I spent four days and nights
             in the remote Texas hillcountry among friends and family.
          
             
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
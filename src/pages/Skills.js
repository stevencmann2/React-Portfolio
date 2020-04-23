import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SkillsCard from '../components/Design/SkillsCard'
import Banner from '../components/Layout/Banners/Banner'
import Pattern from '../assets/images/Backgrounds/pattern.png'
import '../assets/css/home.css'



const Skills = () => {

    return( 
        <div style={{backgroundImage: `url(${Pattern})`}} >
            <Banner 
                background="CedricLetsch.jpg"
                header="Skills"
                subHeader={`"The beautiful thing about learning is that no one can take it away from you"`}
                subHeader2="B.B. King"
                buttonTitle="Skills"
                destination="mySkills"
            />
            <Container style={styles.screenContainer}>
                <SkillsCard />
            </Container>
        </div>
    )

}

const styles = {
    screenContainer: {
        paddingTop: '8em',
        paddingBottom: '6em',
        // paddingLeft: '6em',
        // paddingRight: '6em'
        
    },
}

export default Skills;
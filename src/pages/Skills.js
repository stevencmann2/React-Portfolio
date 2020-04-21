import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SkillsCard from '../components/Design/SkillsCard'
import Banner from '../components/Layout/Banners/Banner'
import '../assets/css/home.css'



const Skills = () => {

    return( 
        <div className="wallpaper" style={{backgroundColor: '#132745'}} >
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
        paddingTop: '4em',
        paddingBottom: '10em',
    },
}

export default Skills;
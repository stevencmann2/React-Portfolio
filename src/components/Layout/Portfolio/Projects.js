import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pattern from '../../../assets/images/Backgrounds/pattern.png'
import ProjectsCard from '../../Design/ProjectsCard';
import projectsData from '../../../assets/json/projectsData.json';
import ScrollAnimation from 'react-animate-on-scroll'


const Projects = () => {
    return (
        
            <div style={styles.screenContainer} id="projects">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <Row>
                <Col>
                    <h1 style={styles.section}>Projects</h1>
                    <hr style={styles.line}/>
                </Col>
            </Row>
                {projectsData.map((item, index) =>
                <ProjectsCard
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    icons={item.localIcons}
                    github={item.github}
                    demo={item.demo}
                />
                )}
                </ScrollAnimation>
           </div>
  
    )

}

const styles={
    screenContainer: {
        backgroundImage: `url(${Pattern})`,
        paddingTop: '4em',
        paddingBottom: '6em',
        paddingLeft: '6em',
        paddingRight: '6em'
    },
    line: {
        width: '5em',
        border: '0.1em solid white',
        marginLeft: 0
    },
    section:{
        fontFamily: `'Abril Fatface', cursive`,
        color: 'white'
    }
  
   
}

export default Projects
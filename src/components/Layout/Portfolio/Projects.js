import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pattern from '../../../assets/images/Backgrounds/pattern.png'
import ProjectsCard from '../../Design/ProjectsCard';
import projectsData from '../../../assets/json/projectsData.json';


const Projects = () => {
    return (
        
            <div style={styles.screenContainer} id="projects">
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
   
   
}

export default Projects
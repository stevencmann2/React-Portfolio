import React from 'react'
import { Card, Image, Row, Col, Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import skillsData from '../../assets/json/skillsData.json'

const SkillsCard = () => {

   const DeploymentSkills = skillsData.filter(item=> item.category === 'Deployment')
   const LangSkills = skillsData.filter(item=> item.category === 'Languages and Tools')
   const LibrarySkills = skillsData.filter(item=> item.category === 'Libraries')
   const FrameworksSkills = skillsData.filter(item=> item.category === 'Frameworks')
   const DBSkills = skillsData.filter(item=> item.category ===  'Databases & Architecture')
   const IDSkills = skillsData.filter(item=> item.category ===  'Identity')
   const DevSkills = skillsData.filter(item=> item.category ===  'Development Tools')
  
    return(
        
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <Card style={styles.cardContainer} id="mySkills">
            
            <Card.Body >
                <Card.Title>
                    Languages & Tools
                </Card.Title>
                    <Container>
                    <Row>
                        {LangSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </Row>
                    </Container>
            </Card.Body>
            

            <Card.Body >
                <Card.Title>
                    Libraries
                </Card.Title>
                    <Container>
                    <Row>
                        {LibrarySkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )}
                      </Row>
                      </Container>
            </Card.Body>

            <Card.Body >
                <Card.Title>
                    Frameworks
                </Card.Title>
                    <Container>
                    <Row>
                        {FrameworksSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )}
                      </Row>
                      </Container>
            </Card.Body> 

            <Card.Body >
                <Card.Title>
                    Databases & Architecture
                </Card.Title>
                    <Container>
                    <Row>
                        {DBSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </Row>
                    </Container>
             </Card.Body>    
             
             <Card.Body >
                <Card.Title>
                    Identity
                </Card.Title>
                    <Container>
                    <Row>
                        {IDSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </Row>
                    </Container>
             </Card.Body>  

            <Card.Body >
                <Card.Title>
                    Development Tools
                </Card.Title>
                    <Container>
                    <Row>
                        {DevSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )}
                      </Row>
                      </Container>
            </Card.Body>

            <Card.Body >
            <Card.Title>
                Deployment
            </Card.Title>
                <Container>
                <Row>
                    {DeploymentSkills.map(item=>
                        <div key={item.id}>
                            <div style={styles.itemStack} >
                                <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )}
                  </Row>
                  </Container>
        </Card.Body>
        </Card>
        </ScrollAnimation>
        
    )

}

const styles = {
    cardContainer:{
        boxShadow: '0 8px 6px -6px black',
        backgroundColor: '#b0bdd4'
    },
    itemStack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1em'
    },
    logo: {
        height: '4em',
        width: '4em',
        color: 'white',
        margin: '0.4em'   
    },
   
}

export default SkillsCard;


import React from 'react'
import { Card, Image, Row, Container } from 'react-bootstrap'
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
                <Card.Title style={styles.LanTitle}>
                    Languages & Tools
                </Card.Title>
                    <Container>
                    <Row>
                        {LangSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p style={styles.lanName}>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </Row>
                    </Container>
            </Card.Body>
            

            <Card.Body >
                <Card.Title style={styles.LanTitle}>
                    Libraries
                </Card.Title>
                    <Container>
                    <Row>
                        {LibrarySkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p style={styles.lanName}>{item.name}</p>
                                </div>
                            </div>
                        )}
                      </Row>
                      </Container>
            </Card.Body>

            <Card.Body >
                <Card.Title style={styles.LanTitle}>
                    Frameworks
                </Card.Title>
                    <Container>
                    <Row>
                        {FrameworksSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p style={styles.lanName}>{item.name}</p>
                                </div>
                            </div>
                        )}
                      </Row>
                      </Container>
            </Card.Body> 

            <Card.Body >
                <Card.Title style={styles.LanTitle}>
                    Databases & Architecture
                </Card.Title>
                    <Container>
                    <Row>
                        {DBSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p style={styles.lanName}>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </Row>
                    </Container>
             </Card.Body>    
             
             <Card.Body >
                <Card.Title style={styles.LanTitle}>
                    Identity
                </Card.Title>
                    <Container>
                    <Row>
                        {IDSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p style={styles.lanName}>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </Row>
                    </Container>
             </Card.Body>  

            <Card.Body >
                <Card.Title style={styles.LanTitle}>
                    Development
                </Card.Title>
                    <Container>
                    <Row>
                        {DevSkills.map(item=>
                            <div key={item.id}>
                                <div style={styles.itemStack} >
                                    <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                    <p style={styles.lanName}>{item.name}</p>
                                </div>
                            </div>
                        )}
                      </Row>
                      </Container>
            </Card.Body>

            <Card.Body >
            <Card.Title style={styles.LanTitle}>
                Deployment
            </Card.Title>
                <Container>
                <Row>
                    {DeploymentSkills.map(item=>
                        <div key={item.id}>
                            <div style={styles.itemStack} >
                                <Image src={require('../../assets/images/Icons'+ item.iconLogo)} style={styles.logo}/> 
                                <p style={styles.lanName}>{item.name}</p>
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
    LanTitle:{
        fontFamily:`'Poppins', sans-serif`,
        fontWeight: 700,
    },
    lanName:{
        fontFamily:`'Poppins', sans-serif`,
        fontWeight: 200
    }
   
}

export default SkillsCard;


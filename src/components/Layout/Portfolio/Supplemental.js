import React from 'react';
import SupplementalCard from '../../Design/SupplementalCard'
import { Container, Row, Col } from 'react-bootstrap'
import '../../../assets/css/home.css'
import supplementalData from '../../../assets/json/supplementalData.json'
import Map from '../../../assets/images/Backgrounds/map.png'

const Supplemental = () => {


    return(
        <div style={{backgroundColor: '#1f2629' , backgroundImage: `url(${Map})`}}>
            <div style={styles.screenContainer} id="supplemental">
                <Row>
                        <Col>
                            <h1 style={{color: 'white'}}>Supplemental</h1>
                            <hr style={styles.line}/>
                        </Col>
                </Row>

                <Row>
                {supplementalData.map(item=>(
                    <Col  xl={6} large={6} md={6} sm={12} xs={12} key={item.id} style={{marginleft: 0, paddingLeft: 0}}>
                        <SupplementalCard 
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            style={styles.cardStyle}
                            localIcons={item.localIcons}
                            github={item.github}
                            demo={item.demo}
                        />
                    </Col>
                    ))}
                </Row>
            </div>  
        </div>
    )

}

const styles= {

    screenContainer: {
        paddingTop: '4em',
        paddingBottom: '10em',
        paddingLeft: '6em',
        paddingRight: '6em'
    },
    cardStyle: {
        boxShadow: '0 8px 6px -6px black',
        borderRadius: '55px 55px 55px 55px',
        height: '50vh',
        width: '50vh',
        maxHeight: '50vh',
        overflow: "hidden",
        cursor: "pointer",
        marginLeft: 0
    },
    line: {
        width: '5em',
        border: '0.1em solid #560c6b',
        marginLeft: 0
    },
  
}

export default Supplemental;


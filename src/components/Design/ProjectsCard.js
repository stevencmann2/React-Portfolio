import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/css/home.css'

const ProjectsCard = props =>{



    return(
      <div className="hvr-grow">
        <Row style={styles.projectDiv} key={props.id} >
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div style={styles.imgContainer} onClick={()=>window.open(props.demo)}>
                        <Card.Img src={require('../../assets/images/Projects' + props.image)} 
                            style={styles.projImg}
                            />  
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} >
                <Card.Body style={styles.cardBody}>
                    <Card.Title className="text-center flex-start" style={styles.projectTitle}>
                        {props.title}
                    </Card.Title>
                    <Card.Subtitle>
                        <FontAwesomeIcon onClick={()=>window.open(props.github)} style={styles.FAIcon} icon="code" />
                        <FontAwesomeIcon onClick={()=>window.open(props.demo)} style={styles.FAIcon} icon="eye"/>
                    </Card.Subtitle>
                    <Card.Text className="text-center" style={styles.descrText}>
                        {props.description}
                    </Card.Text>
                    <div className="d-flex align-content-end">
                        {props.icons ? (props.icons.map((item, index )=>
                            <Card.Img src={require('../../assets/images/Icons' + item)} style={styles.logo} key={index}/>
                            )):(null)}
                    </div>
                </Card.Body>
                </Col>
            
        </Row>
        </div>
    )

}

const styles={
    projectDiv:{
        marginTop: '2em',
        marginBottom: '2em',
        boxShadow: '0 8px 6px -6px black',
        backgroundColor: '#b0bdd4',
        padding: '1.25rem',
        borderRadius: '0.25rem'
    },
    imgContainer:{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: "hidden",
        boxShadow: '0 8px 6px -6px black',
        width: '100%',
        height: '300px',
    },
    projImg:{
        width: '100%',
        height: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '0.25rem',
        cursor: 'pointer'  
    },
   cardBody: {
       display: 'flex',
       flexDirection: 'column', 
       alignItems: 'center',
   },
   logo: {
        height: '3em',
        width: '3em',
        color: 'white',
        margin: '0.4em'   
    },
    FAIcon: {
        height: '1.3em',
        width: '1.3em',
        color: 'black',
        margin: '0.4em',
        cursor: 'pointer'     
},
projectTitle:{
    fontFamily:`'Poppins', sans-serif`,
    fontWeight: 700
},
descrText:{
    fontFamily:`'Poppins', sans-serif`,
    fontWeight: 200 
}
}

export default ProjectsCard;
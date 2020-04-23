import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/home.css'


const SupplementalCard = props => {

    return (
        <Card style={styles.projectDiv} key={props.id} className="hvr-grow">
            <div style={styles.imgContainer} onClick={()=>window.open(props.demo)}>
                <Card.Img src={require('../../assets/images/Supplemental' + props.image)} 
                    style={styles.projImg}
                    />  
            </div>
            <Card.Body style={styles.cardBody}>
                <Card.Title className="text-center flex-start" style={styles.titleText}>
                    {props.title}
                </Card.Title>
                <Card.Subtitle>
                    <FontAwesomeIcon onClick={()=>window.open(props.github)} style={styles.FAIcon} icon="code" />
                    <FontAwesomeIcon onClick={()=>window.open(props.demo)} style={styles.FAIcon} icon="eye"/>
                </Card.Subtitle>
                <Card.Text className="text-center " style={styles.descrText}>
                    {props.description}
                </Card.Text>
                <div className="d-flex align-content-end">
                    {props.localIcons ? (props.localIcons.map((item, index )=>
                        <Card.Img src={require('../../assets/images/Icons' + item)} style={styles.logo} key={index}/>
                        )):(null)}
                </div>
            </Card.Body>
        </Card>

    )

}

const styles={

    projectDiv:{
        margin: '2em',
        boxShadow: '0 8px 6px -6px black',
        backgroundColor: '#b0bdd4',
        padding: '1.25rem',
        borderRadius: '0.25rem',
        overflow: 'auto',
        height: '28em',
        maxHeight: '28em'
    },
    imgContainer:{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: "hidden",
        boxShadow: '0 8px 6px -6px black',
        width: '100%',
        height: '12em',
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
   titleText:{
    //    fontSize: '1em',
       fontFamily:`'Poppins', sans-serif`,
    fontWeight: 700
   },
   logo: {
    height: '1.8em',
    width: '1.8em',
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

descrText:{
    fontFamily:`'Poppins', sans-serif`,
    fontWeight: 200 
}
}

export default SupplementalCard;
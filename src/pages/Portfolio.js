import React from 'react';
import Supplemental from '../components/Layout/Portfolio/Supplemental'
// import SupplementalFlip from '../components/Layout/Portfolio/SupplementalFlip'
import Projects from '../components/Layout/Portfolio/Projects'
import Banner from '../components/Layout/Banners/Banner'
import Pattern from '../assets/images/Backgrounds/pattern.png'
import '../assets/css/home.css'

const Portfolio = () => {


    return(

        <div style={{backgroundImage: `url(${Pattern})`}}>
            <Banner
                background="NatalieChaney.jpg"
                header="Portfolio"
                subHeader={`"Make it simple, but significant"`}
                subHeader2="Don Draper"
                buttonTitle="Projects"
                destination="projects"
                buttonTitle2="Supplemental"
                destination2="supplemental"
            />
        
            <Projects/>
            <Supplemental /> 
          
        </div>
    )
}



export default Portfolio;
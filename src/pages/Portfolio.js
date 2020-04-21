import React from 'react';
import SupplementalFlip from '../components/Layout/Portfolio/SupplementalFlip'
import Projects from '../components/Layout/Portfolio/Projects'
import Banner from '../components/Layout/Banners/Banner'
import '../assets/css/home.css'

const Portfolio = () => {


    return(

        <div className="wallpaper" style={{backgroundColor: '#132745'}}>
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
            <SupplementalFlip /> 
        </div>
    )
}



export default Portfolio;
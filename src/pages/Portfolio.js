import React, { Suspense } from 'react';
// import Supplemental from '../components/Layout/Portfolio/Supplemental'
// import SupplementalFlip from '../components/Layout/Portfolio/SupplementalFlip'
// import Projects from '../components/Layout/Portfolio/Projects'
// import Banner from '../components/Layout/Banners/Banner'
import Pattern from '../assets/images/Backgrounds/pattern.png'
import '../assets/css/home.css'

const Banner = React.lazy(() => import('../components/Layout/Banners/Banner'));
const Projects = React.lazy(() => import('../components/Layout/Portfolio/Projects'));
const Supplemental =  React.lazy(() => import('../components/Layout/Portfolio/Supplemental'));

const Portfolio = () => {
   

    return(
        <Suspense fallback={<div style={{fontSize: '400px'}}>Loading...</div>}>
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

        </Suspense>
    )
}



export default Portfolio;
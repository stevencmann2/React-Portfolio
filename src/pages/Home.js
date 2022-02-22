import React from 'react';
import AboutMe from '../components/Layout/AboutMe'
import Banner from '../components/Layout/Banners/Banner'
import Pattern from '../assets/images/Backgrounds/pattern.png'


const Home = () => {

    return(
        <div style={{backgroundImage: `url(${Pattern})`}}>   
            <Banner
                background="HuguesDeBuyer.jpg"
                header="Full Stack Web Developer"
                subHeader="Bridging user experience with client needs."
                buttonTitle="Bio"
                destination="about"
                />    
            <AboutMe />      
        </div>
    )

}



export default Home;
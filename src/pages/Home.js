import React from 'react';
import AboutMe from '../components/Layout/AboutMe'
import Banner from '../components/Layout/Banners/Banner'


const Home = () => {

    return(
        <div>   
            <Banner
                background="HuguesDeBuyer.jpg"
                header="Full Stack Web Developer"
                subHeader="Bridging user experience with clients needs"
                buttonTitle="Bio"
                destination="about"
                />    
            <AboutMe />      
        </div>
    )

}



export default Home;
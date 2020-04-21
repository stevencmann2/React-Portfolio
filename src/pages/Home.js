import React from 'react';
import AboutMe from '../components/Layout/AboutMe'
import HomeBanner from '../components/Layout/Banners/HomeBanner'


const Home = () => {

    return(
        <div>   
            <HomeBanner
                background="HuguesDeBuyer.jpg"/>    
            <AboutMe />      
        </div>
    )

}

export default Home;
import React from 'react';
import AboutMe from '../components/Layout/AboutMe'
import HomeBanner from '../components/Layout/Banners/HomeBanner'


const Home = () => {

    return(
        <div style={styles.screen}>   
            <HomeBanner
                background="HuguesDeBuyer.jpg"/>    
            <AboutMe />      
        </div>
    )

}

const styles={
    screen:{
        fontFamily: `'Baloo Tammudu 2', cursive`
    }
}

export default Home;
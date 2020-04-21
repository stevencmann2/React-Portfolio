import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loading = () => {

return(
    
    <div style={styles.container}>
            <Loader
                type="Bars"
                color="#09FBD3"
                height={400}
                width={400}
            />
    </div>

    )   

}

const styles = {
    container : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        
    },
    
}

export default Loading;
import React from 'react';
import {Link} from 'react-router-dom';


const Home=()=>{
    
    
    return(
        <div 
        className="container text-center"
        style={ { marginTop:"69px",opacity:"0.8"}} >
        <div 
        className="d-flex justify-content-center align-items-center text-center"
        style={ { height: "100%" , width: "100%",marginTop:"80px" }}>
            <div 
            className="text-center"
            >
                <b style={{fontSize:"44px",color:"black"}}>Welcome<br></br>to<br></br> “AGROMART"<br></br> The Market for Farmers</b>
                <br></br>
                
                <br></br>
                
                <br></br>
                <Link to="/login">
                <button >Get Started</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Home;


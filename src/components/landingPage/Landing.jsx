
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./landing.css"
export default function Landing(){
    return(
        <>
      
        <div id="hero">
            <div id="first">
                <div id="left"><p>SECURE CLOUD STORAGE <br></br>FOR YOUR FILES</p>
            
                </div>
                <div id="hero-img"><img alt="dynocloud hero img" src="/dynocloud-logo2.png"></img></div>
            </div>
        
            <div id="second">
            <div>
                <p>A secure cloud storage platform built with Spring Boot and React,<br></br>
                featuring JWT authentication,<br></br>
                AES-256 file encryption, storage quotas,<br></br>
                and S3-compatible object storage.</p>
            </div>
            
                <div>
                    <Link to="/signup" className="signup-btn">Let's go &#x2192;</Link>
                </div>
        </div>
        </div>
        </>
    )
}
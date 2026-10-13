import "./login.css"
import { Link } from "react-router-dom"
import { generateRecoveryPhrase } from "../../../utilities/generateRecoveryPhrase"
import { useState } from "react";
export default function Signup(){

    const [recoveryPhrase, setRecoveryPhrase ] = useState("generate recovery phrase");

    function handleGeneratePhrase(){
        setRecoveryPhrase(generateRecoveryPhrase());
    }

    return(
        <>
        <div className="authpage-container">
            <div id="signup" className="auth-page">
                <h3 className="form-label">Sign up</h3>
                <form className="form-page">
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="username" id="username"></input>

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="email"></input>

                    <label htmlFor="password">password:</label>
                    <input type="password" placeholder="password"></input>

                    <label htmlFor="password">Confirm password:</label>
                    <input type="text" placeholder="confirm password"></input>
                    
                    <label htmlFor="recovery-pharse">Recovery Phrase: copy and save it, it will be used to recover your account</label>
                    <input type="text" placeholder={recoveryPhrase} disabled></input>

                    <button type="button" onClick={()=> navigator.clipboard.writeText(recoveryPhrase)}>copy</button>
                    <button type="button" id="generate-btn" onClick={handleGeneratePhrase}>Generate</button>
                    

                    <button>Signup</button>
                  
                        
                </form>
                  
                    <div className="dialogue">or <br></br>Already have an account?</div>
                    <Link to="/login" className="auth-switch" >Login</Link>
            </div>

        </div>

        </>
    )
}
import "./login.css"
import { Link } from "react-router-dom"

export default function Signup(){
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
                    
                    <label htmlFor="recovery-pharse">Recovery Phrase:</label>
                    <input type="text" placeholder="generate recovery phrase" disabled></input>
                    <button id="generate-btn">Generate</button>
                    

                    <button>Signup</button>
                  
                        
                </form>
                  
                    <div className="dialogue">or <br></br>Already have an account?</div>
                    <Link to="/login" className="auth-switch" >Login</Link>
            </div>

        </div>

        </>
    )
}
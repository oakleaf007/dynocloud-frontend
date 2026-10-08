import "./login.css"
import { Link } from "react-router-dom"

export default function Signup(){
    return(
        <>
        <div className="authpage-container">
            <div id="signup" className="auth-page">
                <p>Sign up</p>
                <form className="form-page">
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="username" id="username"></input>

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="email"></input>

                    <label htmlFor="password">password:</label>
                    <input type="password" placeholder="password"></input>

                    <label htmlFor="password">Confirm password:</label>
                    <input type="text" placeholder="confirm password"></input>
                    <button>Signup</button>
                  
                        
                </form>
                  <p>or</p> 
                    <p>Already have an account?</p>
                    <Link to="/login" className="auth-switch" >Login</Link>
            </div>

        </div>

        </>
    )
}
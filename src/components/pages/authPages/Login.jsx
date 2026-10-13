import "./login.css"
import { Link } from "react-router-dom"
export default function Login(){
    return(
        <>
        <div class="authpage-container">
            <div id="signup" className="auth-page">
                   <h3 className="form-label">Sign in</h3>
                <form className="form-page">
                   <label for="username">Username:</label>
                    <input type="text" placeholder="username" id="username"></input>
                    
                    <label htmlFor="password">password:</label>
                    <input type="password" placeholder="password"></input>
                    <button>Login</button>
                </form>

                <div className="dialogue">don't have an account?</div>
                <Link to ="/signup" className="auth-switch">Signup</Link>
            </div>

        </div>

        </>
    )
}
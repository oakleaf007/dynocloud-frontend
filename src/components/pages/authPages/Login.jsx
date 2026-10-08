import "./login.css"

export default function Login(){
    return(
        <>
        <div class="authpage-container">
            <div id="signup" className="auth-page">
                <form className="form-page">
                   <label for="username">Username:</label>
                    <input type="text" placeholder="username" id="username"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <input type="text" placeholder="confirm password"></input>
                </form>
            </div>

        </div>

        </>
    )
}
import "./Login.css";
import { Link } from "react-router-dom";
function Login(){
    const handle = (e) => {
        e.preventDefault();
        let userInput = document.getElementById("loginUsername").value;
        const userInputValue = userInput;
        sessionStorage.setItem("username", userInputValue);
    };
    function login() { 
        const username = document.getElementById("loginUsername").value; 
        const password = document.getElementById("loginPassword").value; 
        
        let users = JSON.parse(localStorage.getItem("users")) || []; 
        
        const validUser = users.find( 
            user => user.username === username && user.password === password 
        ); 
        
        if (validUser) { 
            document.getElementById("link").click();
            alert("login succussful");
        } else {
            alert("Invalid login details.");
        } 
    } 
    return(
        <>
            <div id="loginSection">
                <section className="loginSection">
                    <nav>
                        <h1>You are welcome back to Money Must be Made (MMM) JobBoard</h1>
                        <p style={{color: "orange", textAlign: "center"}}>Login now and start applying for jobs. <i className="fa-solid fa-arrow-right"></i></p>
                    </nav>
                </section>
                <section className="loginsection">
                    <h1>Login to MMM JobBoard</h1>
                    <form action="" onSubmit={handle} className="loginform">
                        <nav>
                            <label>Username</label>
                            <input type="text" id="loginUsername" placeholder="Username" /> 
                        </nav>
                        <nav>
                            <label>Password</label>
                            <input type="password" id="loginPassword" placeholder="Password" /> 
                        </nav>
                        <nav>
                            <button onClick={login}>
                                Login
                            </button>
                            <Link to="/dashboard" id="link"></Link>
                        </nav>
                    </form>
                    <p>Doesn't have an account <span onClick={() => {
                        document.querySelector("#create").click();
                    }}>Create Account</span></p>
                    <p>Copyright &copy; Money Must be Made 2025</p>
                    <Link to="/signup" id="create"/>
                </section>
            </div>
            
        </>
    )
}
export default Login;
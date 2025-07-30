import "./Signup.css";
import { Link } from "react-router-dom";
function SignUp(){
    function Create() { 
        const username = document.getElementById("signupUsername").value; 
        const password = document.getElementById("signupPassword").value; 
        
        if (!username || !password) { 
            alert("fill all the fields");
        } 
        let users = JSON.parse(localStorage.getItem("users")) || []; 
        if (username && password) { 
            document.querySelector("#login").click();
            users.push({ username, password }); 
            localStorage.setItem("users", JSON.stringify(users));
        }else if(users.find(user => user.username === username || user.password === password)){
            alert("Email already exists.");
        }
    }
    return(
        <>
            <div id="signupSection">
                <section className="signupSection">
                    <nav>
                        <h1>You are welcome to Money Must be Made (MMM) JobBoard</h1>
                        <p style={{color: "orange", textAlign: "center"}}>SignUp now and start applying for jobs. <i className="fa-solid fa-arrow-right"></i></p>
                    </nav>
                    <marquee>Designed by Abdulmalik</marquee>
                </section>
                <section id="signup"> 
                    <h1>Signup to MMM JobBoard</h1>
                    <form>
                        <nav>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="signupUsername" placeholder="Username" /> 
                        </nav>
                        <nav>
                            <label htmlFor="username">Phone Number</label>
                            <input type="tel" id="phonenumber" placeholder="Phone Number" minLength="10" maxLength="11" /> 
                        </nav>
                        <nav>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="signupPassword" placeholder="Password" /> 
                        </nav>
                        <nav>
                            <button onClick={Create}>Sign Up</button> 
                        </nav>
                    </form>
                    
                    <p style={{color: "black"}}>Already have an account <span onClick={() => {
                        document.querySelector("#login").click();
                    }}>Login</span></p>
                    <p>Copyright &copy; Money Must be Made 2025</p>
                    <marquee>Designed by Abdulmalik</marquee>
                </section>
            <Link to="/login" id="login"></Link>
            </div>
        </>
    )
}

export default SignUp;
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar(){
    const userNmae = sessionStorage.getItem("username");
    return(
        <div id="navbar">
            <header>
                <nav>
                    <h1> MMM JobBoard</h1>
                </nav>
                <nav className="mob">
                    <aside>
                        <a href="#" className="active">Home</a>
                        <a href="#">How it Works</a>
                    </aside>
                </nav>
                <nav className="mob">
                    <button>
                        Post Free Jobs
                    </button>
                </nav>
                <nav id="drop-down" className="mob">
                    {
                        (userNmae) ?
                            <li style={{listStyleType: "none", cursor: "pointer"}}>
                                Hi, <span style={{color: "orange"}}>Welcome, user!</span> 
                            </li>
                        : <li style={{listStyleType: "none", cursor: "pointer"}}>
                                Hi, <span style={{color: "orange"}}>Welcome new User</span>
                            </li>
                    }
                    <summary>
                        <p onClick={() => {
                            const confirmed = window.confirm("Are you sure you want to logout");
                            if(confirmed){
                                document.getElementById("logout").click();
                            }
                        }}>Logout</p>
                    </summary>
                    <Link to="/login" id="logout"/>
                    
                </nav>
                <nav className="hamburger">
                    <i class="fa-solid fa-bars"></i>
                </nav>
            </header>
        </div>
    )
}
export default NavBar;
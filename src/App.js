import JobBoard from "./Dashboard/Dashboard";
import Landing from "./LandingPage/Index";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Signup/Signup";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<JobBoard/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;

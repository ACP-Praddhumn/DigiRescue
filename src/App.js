import { Routes , Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";


function App() {

  return(
    <div>

      <Navbar/>
      
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/signUp" element={<SignUp/>} />

      </Routes>

    </div>
  )
}

export default App;

import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Navbar from "./Navbar";

function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
}

export default AllRoutes;
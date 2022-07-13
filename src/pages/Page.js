import React from "react";
import {Route, Routes} from "react-router-dom";
// import Home from './Home';
import Login from "./Login";
import Budget from "./Budget";

const Page=()=>{
    return(
       <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/budget" element={<Budget/>}></Route>
       </Routes>

       
    
    )
}


export default Page;
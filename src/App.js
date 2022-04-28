import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Home';
import Department from './Department';
import Studentlist from './Studentlist';
import Signup from "./Signup";
import Login from './Login';
import StdDetails from "./StdDetails";
import Navbar from "./Navbar";

const App = () =>{
    return (
       <div>
        <Navbar/>
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='department' element={<Department/>}/>
            <Route path='stdlist' element={<Studentlist/>}>
              <Route path=':name/:regno/:branch' element={<StdDetails/>}/>
            </Route>
            <Route path='signup' element={<Signup/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
        </Routes>
    </div>
        
    );
};


export default App;
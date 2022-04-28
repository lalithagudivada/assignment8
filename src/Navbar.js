import React from "react";
import  {NavLink} from 'react-router-dom';
const Navbar = () => {
    
    return (
        <div>
            <div >
                <NavLink  to='home'>Home</NavLink>
                <NavLink  to='department'>Department</NavLink>
                <NavLink  to='stdlist'>Student List</NavLink>
                <NavLink  to='signup'>sign up</NavLink>
                <NavLink  to='login'>Login</NavLink>
                <NavLink  to='home'>Logout</NavLink>

                
            </div>
        </div>
    );
};

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div >
            <h3 >The Navbar</h3>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >ABOUT</NavLink>
            <NavLink to="/users" >Users</NavLink>
            <hr />
        </div>
    )
}

export default Navbar
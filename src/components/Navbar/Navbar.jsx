import React from "react";
import { Link, NavLink } from "react-router-dom";
import NStyle from "../Navbar/Navbar.module.css"

const Navbar = (props) => {
    return (
        <div className={NStyle.Menu}>
            <h3>Este es el Navbar</h3>
            <NavLink to="/" className={NStyle.Home}>Home</NavLink><br/>
            <Link to="/about">ABOUT</Link><br/>
            <Link to="/users">Users</Link><br/>
            <hr/>
        </div>
    )
}

export default Navbar
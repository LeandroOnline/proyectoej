import React from "react";
import { Link, NavLink } from "react-router-dom";
import NStyle from "../Navbar/Navbar.module.css"


const Navbar = (props) => {
    return (
        <div className={NStyle.body}>
            <h3 >Este es el Navbar</h3>
            <button style={NStyle.button}><NavLink to="/" className={NStyle.Letra}>Home</NavLink><br/></button><br/>
            <button><NavLink to="/about" className={NStyle.Letra}>ABOUT</NavLink><br/> </button><br/>
            <button><NavLink to="/users" className={NStyle.Letra}>Users</NavLink><br/> </button><br/>
            <hr/>
        </div>
    )
}

export default Navbar
//holacauur
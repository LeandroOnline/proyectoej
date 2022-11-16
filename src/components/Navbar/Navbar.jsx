import React from "react";
import { Link } from "react-router-dom";
import NStyle from "../Navbar/Navbar.module.css"

const Navbar = (props) => {
    return (
        <div className={NStyle.Menu}>
         {/* <div className="Menu"></div> */}
            <h3>Este es el Navbar</h3>
            <Link to="/">Home</Link><br/>
            <Link to="/about">ABOUT</Link><br/>
            <Link to="/users">Users</Link><br/>
            <hr/>   
        </div>
    )
}

export default Navbar
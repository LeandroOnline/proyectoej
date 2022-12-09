import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" >ABOUT</NavLink>
            <NavLink to="/users" >Users</NavLink>
            <hr />
        </div>
    )
}

export default Navbar
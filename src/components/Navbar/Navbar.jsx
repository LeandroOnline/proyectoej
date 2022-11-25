import React from "react";
import { Link, NavLink } from "react-router-dom";
import NStyle from "../Navbar/Navbar.module.css"


const Navbar = (props) => {
    return (
        <div className={NStyle.body}>
            <h3 >Este es el Navbar</h3>
            <NavLink to="/" className={NStyle.Letra}><button>Home<br/></button></NavLink><br/>
            <NavLink to="/about" className={NStyle.Letra}><button>ABOUT<br/> </button></NavLink><br/>
            <NavLink to="/users" className={NStyle.Letra}><button>Users<br/> </button></NavLink><br/>
            {/* <button><NavLink to="/userdetail" className={NStyle.Letra}>UsersDetails</NavLink><br/> </button><br/> */}
            <hr/>
        </div>
    )
}

export default Navbar
//holacauur
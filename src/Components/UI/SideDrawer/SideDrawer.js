import React from "react";
import classes from "./SideDrawer.module.css";
import { NavLink } from "react-router-dom";

function SideDrawer(props){
    return(
        <div id="mySidenav" className={`${classes.sidenav} ${props.show && classes.toggleSideDrawer}`} onClick={props.clicked}>
            <a href="javascript:void(0)" className={classes.closebtn} onClick={props.clicked}>&times;</a>
            <NavLink to="/my-works">My Works</NavLink>
            <NavLink to="/about-me">About me</NavLink>
            <NavLink to="/contact-me">Contact me</NavLink>
        </div>
    );
}

export default SideDrawer;
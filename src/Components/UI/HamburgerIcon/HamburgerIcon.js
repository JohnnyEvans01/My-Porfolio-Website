import React from "react";
import classes from "./HamburgerIcon.module.css";

function HamburgerIcon(props){
    return(
        <ul onClick={props.wasClicked} className={classes.HamburgerIcon}>
            <li className={classes.Bar1}></li>
            <li className={classes.Bar2}></li>
            <li className={classes.Bar3}></li>
        </ul>
    );
}

export default HamburgerIcon;
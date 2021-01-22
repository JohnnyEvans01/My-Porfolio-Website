import React from "react";
import classes from "./Avatar.module.css";

function Avatar(props){
    return(
        <img className={classes.Avatar} src={props.src} alt="Avatar"/>
    );
}

export default Avatar;
import React from "react";
import classes from "./Project.module.css";
import { NavLink } from "react-router-dom";

function Project(props){
    return(
        <div className={classes.Project}>
            <img className={classes.ProjectLogo} src={props.image} alt="sas"/>
            <div className={classes.ProjectDescription}>
                <h2>{props.title}</h2>
                <NavLink to={props.destination}>View Project</NavLink>
            </div>
        </div>
    );
}

export default Project;
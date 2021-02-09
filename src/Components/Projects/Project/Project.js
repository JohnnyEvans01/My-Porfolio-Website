import React from "react";
import classes from "./Project.module.css";

function Project(props){
    return(
        <div className={classes.Project}>
            <img onClick={props.clicked} className={classes.ProjectLogo} src={props.image} alt="sas"/>
            <div className={classes.ProjectDescription}>
                <h2>{props.title}</h2>
                <a href={props.destination} target="_blank">View Code</a>
            </div>
        </div>
    );
}

export default Project;
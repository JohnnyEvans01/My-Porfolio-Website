import React, { useState, useEffect } from "react";
import sanityClient from "../../sanityClient.js";
import classes from "./Projects.module.css";
import Project from "./Project/Project";
import Spinner from "../UI/Spinner/Spinner";
import { NavLink } from "react-router-dom";

function Projects(){
    const [allProjects, setAllProjects] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "My Works | John Evans Dakurah";
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                projectType,
                builtWith,
                duration,
                date,
                github,
                hostedUrl,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => {
                setAllProjects(data)
                console.log(data)
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    let projects = (
        <div className={classes.Spinner}>
            <Spinner />
        </div>
    );

    if(allProjects){
        projects = (
            <div className={classes.Projects}>
                {allProjects.map(project => {
                    return(
                        <NavLink to={"/my-works/" + project.slug.current} key={project.title}>
                            <Project 
                                destination={"/my-works/" + project.slug.current}
                                image={project.mainImage.asset.url}
                                title={project.title}
                        />
                        </NavLink>
                    );
                })}
            </div>
        );
    }
    return(
        <React.Fragment>
            <h1 className={classes.Header}>My Works</h1>
            <h2 className={classes.Header2}>Some amazing projects I've created!</h2>
            {projects}
        </React.Fragment>
    );
}

export default Projects;
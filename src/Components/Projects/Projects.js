import React, { useState, useEffect } from "react";
import sanityClient from "../../sanityClient.js";
import classes from "./Projects.module.css";
import Project from "./Project/Project";
import Spinner from "../UI/Spinner/Spinner";
import ModalImage from "../UI/ModalImage/ModalImage";
import { NavLink } from "react-router-dom";

function Projects(){
    const [allProjects, setAllProjects] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
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
                setAllProjects(data);
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
                {allProjects.slice().reverse().map(project => {
                    return(
                            <Project 
                                key={project.title}
                                clicked={() => setSelectedImage({
                                    title: project.title,
                                    imageUrl: project.mainImage.asset.url,
                                    builtWith: project.builtWith
                                })}
                                destination={project.github}
                                image={project.mainImage.asset.url}
                                title={project.title}
                        />
                    );
                })}
            </div>
        );
    }
    return(
        <React.Fragment>
            <h1 className={classes.Header}>My Works</h1>
            <h2 className={classes.Header2}>You may click on the image to view the project!</h2>
            {selectedImage && <ModalImage closeModalImage={() => setSelectedImage(null)} selectedImage={selectedImage}/> }
            {projects}
        </React.Fragment>
    );
}

export default Projects;
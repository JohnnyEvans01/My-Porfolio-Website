import React, { useState, useEffect } from "react";
import sanityClient from "../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { useParams } from "react-router-dom";
import classes from "./SelectedProject.module.css";
import { NavLink } from "react-router-dom";


function SelectedProject(){
    const [selectedProject, setSelectedProject] = useState(null);
    const { slug } = useParams();

    const builder = imageUrlBuilder(sanityClient);
    function urlFor(source){
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            projectType,
            builtWith,
            duration,
            date,
            github,
            hostedUrl,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`)
        .then((data) => {
            setSelectedProject(data[0])
            console.log(data)
        })
        .catch(error => console.log(error))
    }, []);

    let selectProject = (<h1></h1>);
    if(selectedProject){
        selectProject = (
            <div className={classes.SelectedProject}>
                <div className={classes.Background}>
                    <div className={classes.Header}>
                        <h1>{selectedProject.title}</h1>
                        <p><em>Finished on {selectedProject.date}</em></p>
                    </div>
                    <div className={classes.About}>
                        <p>{selectedProject.body[0].children[0].text}</p>
                    </div>
                    <div className={classes.Image}>
                        <img src={selectedProject.mainImage.asset.url} alt="Covid-19 tracker"/>
                    </div>
                    <div className={classes.Body}>
                        <div className={classes.ProjectType}>
                            <h3>Project Type</h3>
                            <ul>
                                <li> - {selectedProject.projectType}</li>
                            </ul>
                        </div>
                        <div className={classes.BuiltWith}>
                            <h3>Built With</h3>
                            <ul>
                                <li> - {selectedProject.builtWith}</li>
                            </ul>
                        </div>
                        <div className={classes.UsefulLinks}>
                            <h3>Useful Links</h3>
                            <ul>
                                {selectedProject.github ? <li> - View code on <a href={selectedProject.github}>Github</a></li> : null}
                                {selectProject.hostedUrl ? <li> - View hosted project <a href={selectProject.hostedUrl}>Here</a></li> : null}
                            </ul>
                        </div>
                        <p className={classes.GoBackLink}>Go back all projects? Click <NavLink to="/my-works">Here!</NavLink></p>
                    </div>
                </div>
            </div>
        );
    } 

    return selectProject;
}

export default SelectedProject;
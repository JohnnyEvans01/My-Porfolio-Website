import React, { useEffect } from "react";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home(){
    useEffect(() => {
        document.title = "Home | John Evans Dakurah"
    });

    return(
        <div className={classes.Hero}>
            <div className={classes.HeroContent}>
                <h1>Hola! I am Dakurah</h1>
                <h3>A Front End Web Developer</h3>
                <div>
                    <NavLink to="/about-me">About me</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;
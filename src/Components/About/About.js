import React, { useEffect } from "react";
import classes from "./About.module.css";
import Avatar from "../UI/Avatar/Avatar";
import AvatarImage from "../../assets/Jed.jpg"
import { NavLink } from "react-router-dom";

function About(){
    useEffect(() => {
        document.title = "About | John Evans Dakurah";
    });

    return(
        <div className={classes.About}>
            <div className={classes.AboutContent}>
                <h1 className={classes.AboutText}>About Me!</h1>
                <div className={classes.Header}>
                    <Avatar src={AvatarImage}/>
                </div>
                <div className={classes.Body}>
                    <p className={classes.IntroInfo}>
                        Hi! I am John Evans Dakurah! I'm a Front End Web (React) Developer currently living and studying in Turkey. I have over 1.5 
                        years of experience in creating very attractive, mobile friendly and well 
                        optimized webpages with HTML, CSS, Bootstrap, JavaScript, React Js, Redux and more. This website is my digital 
                        garden - a compendium of the things I've learnt and created over the years. This site has no Ads, sponsors nor affiliates.
                    </p>
                    <div className={classes.Education}>
                        <h3>Education</h3>
                        <ul>
                            <li> - Bsc. Automotive Engineering, Gazi University - Turkey</li>
                            <li> - ST. Francis Xavier Minor Seminary, High School - Ghana</li>
                        </ul>
                    </div>
                    <div className={classes.Skills}>
                        <h3>Skills</h3>
                        <ul>
                            <li> - HTML, CSS, JavaScript</li>
                            <li> - Bootstrap</li>
                            <li> - React JS and Redux</li>
                            <li> - Responsive Web Design</li>
                            <li> - Git (version control)</li>
                            <li> - On-Page SEO</li>
                        </ul>
                    </div>
                    <div className={classes.Languages}>
                        <h3>Languages</h3>
                        <ul>
                            <li> - English, Turkish and Dagaare</li>
                        </ul>
                    </div>
                    <div className={classes.Interests}>
                        <h3>Interests</h3>
                        <ul>
                            <li> - Automobiles</li>
                        </ul>
                    </div>
                    <div className={classes.PsNote}>
                        Need to get in touch with me? You can contact me <span><NavLink to="/contact-me">Here!</NavLink></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
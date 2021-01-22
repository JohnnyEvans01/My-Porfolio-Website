import React, { useEffect } from "react";
import classes from "./Contact.module.css";

function Contact(){
    useEffect(() => {
        document.title = "Contact Me | John Evans Dakurah"
    });

    return(
        <div className={classes.Contact}>
            <div className={classes.Con}>
                <h1 className={classes.Head}>Contact me!</h1>
                <div>
                    <ul>
                        <li>Gazi University, Faculty of Technology</li>
                        <li>Automotive Engineering Department</li>
                        <li>06500 Teknikokullar</li>
                        <li>Ankara, Turkey</li>
                        <li>Email: johnevansdakurah@gmail.com</li>
                        <li>Tel: +90 312 202 20 00</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
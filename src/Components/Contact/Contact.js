import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import Spinner from "../UI/Spinner/Spinner";
import SuccessModal from "../UI/SuccessModal/SuccessModal.js";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from "./Contact.module.css";

function Contact(){
    const [isLoading, setIsLoading] = useState(false);
    const [succesfullySent, setSuccesfullySent] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        document.title = 'Contact Me | John Evans Dakurah';
    });

    function sendEmail(event) {
        setIsLoading(true);
        event.preventDefault();
        emailjs.sendForm('service_3rtt5rh', 'template_4ofvs6e', event.target, 'user_KxMhEOdNiHnwJW5mIS8BY')
          .then((result) => {
              console.log(result.text);
              setIsLoading(false);
              setSuccesfullySent(true);
              event.target.reset();
          }, (error) => {
              setIsLoading(false);
              setIsError(true);
              event.target.reset();
              console.log(error.text);
          });
    }

    return(
        <div className={classes.Contact}>
            { succesfullySent && <SuccessModal closeModal={() => setSuccesfullySent(false)}/> }
            { isError && <ErrorModal closeModal={() => setIsError(false)}/> }
            { isLoading ? <Spinner /> :
            <div className={classes.Con}>
                <h1 className={classes.Head}>Contact me!</h1>
                <div className={classes.ContactForm}>
                    <div>
                        <form onSubmit={sendEmail}>
                            <div className={classes.InputContainer}>
                                <label>Your Name (Required)<sup style={{color: 'red'}}>*</sup></label>
                                <input className={classes.Input} autoComplete="none" required type="text" placeholder="Name" name="name" />
                            </div>
                            <div className={classes.InputContainer}>
                                <label>Your Email (Required)<sup style={{color: 'red'}}>*</sup></label>
                                <input className={classes.Input} pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$" required type="email" placeholder="Email" name="email" />
                            </div>
                            <div className={classes.InputContainer}>
                                <label>Subject</label>
                                <input className={classes.Input} autoComplete="none" type="text" placeholder="Subject" name="subject" />
                            </div>
                            <div className={classes.InputContainer}>
                                <label>Your Message (Required)<sup style={{color: 'red'}}>*</sup></label>
                                <textarea className={classes.Input} required placeholder="Enter your message" name="message" />
                            </div>
                            <div className={classes.InputContainer}>
                                <button  className={classes.Button} type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> }
        </div>
    );
}

export default Contact;
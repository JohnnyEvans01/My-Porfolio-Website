import React from "react";
import classes from "./SuccessModal.module.css";

function SuccessModal(props){
    return(
        <div  className={classes.modal} onClick={props.closeModal}>
            <div className={classes.modalContent}>
                <div className={classes.Text}>
                    <p>Message Succesfully Sent!</p>
                    <p>I will replly as soon as I can. Thank you!</p>
                </div>
                <div className={classes.Btn}>
                    <button onClick={props.closeModal}>Okay</button>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal;
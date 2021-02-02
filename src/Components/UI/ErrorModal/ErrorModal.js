import React from "react";
import classes from "./ErrorModal.module.css";

function ErrorModal(props){
    return(
        <div  className={classes.modal} onClick={props.closeModal}>
            <div className={classes.modalContent}>
                <div className={classes.Text}>
                    Message unsuccesfully sent :(
                </div>
                <div className={classes.Btn}>
                    <button onClick={props.closeModal}>Please try again</button>
                </div>
            </div>
        </div>
    );
}

export default ErrorModal;
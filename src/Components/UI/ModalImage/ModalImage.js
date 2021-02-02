import React from "react";
import "./ModalImage.css";

function ModalImage(props){
    return(
        <div id="myModal" className={`modal ${props.selectedImage ? "toggleModal" : ''}`} onClick={props.closeModalImage}>
            <span className="close" onClick={props.closeModalImage}>&times;</span>
            <img src={props.selectedImage.imageUrl} className="modal-content" id="img01" />
            <div className="caption">
                <h2>{props.selectedImage.title}</h2>
                <h2>{props.selectedImage.builtWith}</h2>
            </div>
        </div>
    );
}

export default ModalImage;
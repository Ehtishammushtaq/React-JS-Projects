import {useState} from "react";
function Modal(props) {
    
    return(
    <div className="modal">
        <p>
            Are you sure?
        </p>
        <buttons className='btn btn--alt'>Cancel</buttons>
        <buttons className='btn'>Confirm</buttons>
    </div>
    );
}

export default Modal;
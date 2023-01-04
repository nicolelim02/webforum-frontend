import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";
import "../../styles/createpost.css";

function Modal({ isOpen, setIsOpen, title, index=0, children }) {

    useEffect(() => {
        if (isOpen) {
            const modal = document.getElementById(`modal-${index}`);
            modal.classList.add("show");
            modal.classList.remove("hide");
        } else {
            const modal = document.getElementById(`modal-${index}`);
            modal.classList.add("hide");
            modal.classList.remove("show");
        }
    }, [isOpen, index]);

    return (
        <div className="overlay hide" id={`modal-${index}`}>
            <div className="modal-container" >
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
                        <IconContext.Provider value={{ className: "modal-icon" }}>
                            <MdClose />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer" />
            </div>
        </div>
    )
}

export default Modal;

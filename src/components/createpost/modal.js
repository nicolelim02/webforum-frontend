import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";
import "../../styles/createpost.css";

function Modal({ isOpen, setIsOpen, title, children }) {

    useEffect(() => {
        if (isOpen) {
            const modal = document.getElementById("modal");
            modal.classList.add("show");
            modal.classList.remove("hide");
        } else {
            const modal = document.getElementById("modal");
            modal.classList.add("hide");
            modal.classList.remove("show");
        }
    }, [isOpen]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsOpen(false);
    }

    return (
        <div className="overlay hide" id="modal">
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
                <div className="modal-footer">
                    <button className="modal-save-btn" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

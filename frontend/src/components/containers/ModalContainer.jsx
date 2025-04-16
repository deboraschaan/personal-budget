import { React, useState } from "react";
import Modal from "../ui/Modal";
import Backdrop from "../layout/Backdrop";
import { Outlet } from "react-router";

export default function ModalContainer({ onClose, id }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && <Backdrop onClick={onClose} />}

            <Modal id={id} open={isOpen} toggle={isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen)} >

                <Outlet />
            </Modal>
        </>

    )
}
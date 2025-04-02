import React from "react";
import ModalForm from './ModalForm';

export default function Modal() {
    return (
        <dialog id="modal-id" className="flex flex-col items-center gap-4 rounded-lg bg-afternoon p-6 w-4/5 shadow-md outline outline-black/5">
            <h3>Create new envelope</h3>
            <ModalForm type="create" />

        </dialog>
    )
}
import React from "react";
import ModalForm from './ModalForm';

export default function Modal() {
    return (
        <dialog id="modal-id" className="block w-4/5 m-auto rounded-lg border-zinc-200 border p-4">
            <div className="flex flex-col items-center gap-4 p-6">
                <ModalForm formId="form-balance" />
            </div>

        </dialog>
    )
}
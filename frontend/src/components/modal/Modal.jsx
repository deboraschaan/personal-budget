import React from "react";
import ModalForm from './ModalForm';

export default function Modal(props) {
    return (
        <dialog
            data-id="modal"
            className="fixed block z-50 inset-x-4 top-20 duration-150  w-4/5 m-auto rounded-lg border-zinc-200 border p-4">
            <div
                className="flex flex-col items-center gap-4 p-6">
                <ModalForm
                    formId={props.formId}
                />
            </div>
        </dialog>
    )
}
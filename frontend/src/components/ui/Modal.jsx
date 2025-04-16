import React from "react";
import { Outlet } from "react-router";
import CreateForm from "../forms/CreateForm";

export default function Modal({ id }) {

    return (
        <>
            <dialog
                data-id="modal"
                className="fixed block z-50 inset-x-4 m-auto p-8 text-center
                top-20 lg:top-30 duration-150 w-4/5 rounded-lg
                border-zinc-200 border"
            >
                {id === "form-create" && <CreateForm />}

            </dialog>
        </>
    )
}
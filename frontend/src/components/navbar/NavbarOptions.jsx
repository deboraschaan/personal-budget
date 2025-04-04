import React from "react";
import { Link } from "react-router";

export default function NavbarOptions(props) {


    return (
        <dialog id="dropdown-id" className="block shadow-xl backdrop-blur-sm w-4/5 m-auto rounded-lg border-zinc-200 border p-4">
            <div className="flex flex-col items-center gap-4 p-6">

                <Link to={props.modal}>Search</Link>
                <Link to={props.modal}>Create new envelope</Link>
                <Link to={props.modal}>Edit envelope</Link>
                <Link to={props.modal}>Delete envelope</Link>
            </div>

        </dialog>
    )
}
import React from "react";

export default function NavbarButton(props) {
    return (
        <button type="button" className="group text-center" variant={props.variant} onClick >
            <i className={`text-zinc-400 group-hover:text-zinc-500 text-2xl group- ${props.icon}`} ></i>
        </button>
    )
};
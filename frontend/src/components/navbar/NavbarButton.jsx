import React from "react";

export default function NavbarButton(props) {
    return (
        <button className="text-center" variant={props.variant} onClick >
            <i className={`text-2xl ${props.icon}`} ></i>
        </button>
    )
};
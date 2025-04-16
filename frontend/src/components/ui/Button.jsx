import React from "react";
import { NavLink } from "react-router";

export default function Button({ children, to, type = "button", onClick, className, value }) {
    if (to) {
        return (
            <>
                <NavLink
                    to={to}
                    className={`nav-link ${className}`}
                >
                    {children}
                </NavLink>
            </>
        )
    }
    return (
        <>
            <button
                type={type}
                className={`btn ${className}`}
                onClick={onClick}
                value={value}
            >
                {children}
            </button>
        </>
    )
};
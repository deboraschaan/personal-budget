import React from "react";
import { NavLink } from 'react-router';
import NavList from "./NavList";


export default function NavBar() {


    return (
        <nav className="sticky z-50 top-0 bg-white items-center 
        flex flex-row justify-between 
        px-7 py-2 shadow-md shadow-zinc-900/5 transition duration-500
        lg:px-10 lg:justify-between">

            <h2 className="text-aspargus w-50">
                <NavLink to="/">
                    Personal Budget
                </NavLink>
            </h2>

            <NavList />

        </nav>
    )
};

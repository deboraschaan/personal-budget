import React from "react";
import { Link, useLocation } from "react-router";

export default function NavbarOptions() {
    const location = useLocation();

    return (
        <div
            id="options"
            className={`fixed z-50 right-8 top-20
            ${location.pathname === "/options" ? "visible" : "invisible"}
            rounded-lg mx-auto
            bg-white
            border-zinc-200 border p-4
            `}
        >
            <ul className="divide-y divide-zinc-100 -mt-2 p-6">
                <li className="group hover:text-aspargus py-4 flex gap-3 items-center">
                    <i className="group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-magnifying-glass"></i>
                    <Link to="/search">Search</Link>
                </li>
                <li className="group hover:text-aspargus py-4 flex gap-3 items-center">
                    <i className="group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-circle-plus"></i>
                    <Link to="/create">Create new envelope</Link>
                </li>
                <li className="group hover:text-aspargus py-4 flex gap-3 items-center">
                    <i className="group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-pen-to-square"></i>
                    <Link to="/edit">Edit envelope</Link>
                </li>
                <li className="group hover:text-aspargus py-4 flex gap-3 items-center">
                    <i className="group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-trash-can"></i>
                    <Link to="/delete">Delete envelope</Link>
                </li>
                <li className="group hover:text-aspargus py-4 flex gap-3 items-center">
                    <i className="group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-money-bill-transfer"></i>
                    <Link to="/transfer">Transfer from envelopes</Link>
                </li>
                <li className="group hover:text-aspargus py-4 flex gap-3 items-center">
                    <i className="group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-circle-dollar-to-slot"></i>
                    <Link to="/add-balance">Add Balance</Link>
                </li>
            </ul>
        </div>
    )
}

/* tabIndex="-1"
            className="fixed z-50 inset-0 top-8 duration-150 
            bg-zinc-500 bg-opacity-50 transition-opacity
            shadow-xl backdrop-blur-sm 
            backdrop:bg-zinc-100 w-4/5 m-auto rounded-lg
            border-zinc-200 border p-4"> */


/*         <dialog
id="options-id"
className={`fixed z-50 top-20 inset-0 
${location.pathname === "/options" ? "block" : ""}
rounded-lg mx-auto backdrop:bg-amber-800
open:backdrop-blur-3xl
starting:open:opacity-100
border-zinc-200 border p-4
`}
>
<ul method="dialog" className="bg-white divide-y divide-zinc-100 p-6">
    <li className="py-4 flex gap-3 items-center">
        <i className="text-2xl text-zinc-400 fa-solid fa-magnifying-glass"></i>
        <Link to="/search">Search</Link>
    </li>
    <li className="py-4 flex gap-3 items-center">
        <i className="text-2xl text-zinc-400 fa-solid fa-circle-plus"></i>
        <Link to="/create">Create new envelope</Link>
    </li>
    <li className="py-4 flex gap-3 items-center">
        <i className="text-2xl text-zinc-400 fa-solid fa-square-pen"></i>
        <Link to="/edit">Edit envelope</Link>
    </li>
    <li className="py-4 flex gap-3 items-center">
        <i className="text-2xl text-zinc-400 fa-solid fa-trash-can"></i>
        <Link to="/delete">Delete envelope</Link>
    </li>
</ul>
</dialog> */
/*  */
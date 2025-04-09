import { React, useState } from "react";
import { useNavigate, Link, useLocation } from 'react-router';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        if (!isOpen) {
            navigate("/options");
        } else {
            navigate("/");
        }
        setIsOpen(!isOpen);
    }

    return (
        <nav className="sticky z-50 top-0 bg-white items-center 
        flex flex-row justify-between lg:justify-between
        px-7 py-5 shadow-md shadow-zinc-900/5 transition duration-500
        lg:px-10">
            <h2 className="text-aspargus w-50">
                <Link to="/">
                    Personal Budget
                </Link>
            </h2>

            <button
                onClick={handleClick}
                data-open={isOpen}
                aria-expanded={isOpen}
                className={`group lg:hidden ${({ isActive }) => isActive ? "active" : ""}`}
            >
                <i className={`fa-solid fa-bars
                group-hover:text-aspargus
                group:text-zinc-400 transition text-2xl
                ${isOpen ? "group:text-aspargus group-focus:text-aspargus" : ""}`}
                >
                </i>
            </button>

            <ul className="hidden lg:flex lg:justify-between lg:w-full lg:mr-20">
                <li>
                    <Link
                        className="group flex flex-col items-center gap-3"
                        to={location.pathname !== "/search" ? "/search" : "/"}>
                        <i className={`group-hover:text-aspargus text-2xl
                             text-zinc-400 fa-solid fa-magnifying-glass
                              ${location.pathname === "/search" ? "group:text-aspargus group-focus:text-aspargus" : ""}`}></i>
                        <p className={`${location.pathname === "/search" ? "group:text-aspargus group-focus:text-aspargus" : ""} 
                        text-sm text-zinc-400 group-hover:text-aspargus`} >Search envelope</p>
                    </Link>
                </li>
                <li>
                    <Link
                        className="group flex flex-col items-center gap-3"
                        to={location.pathname !== "/create" ? "/create" : "/"}>
                        <i className={`group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-circle-plus
                             ${location.pathname === "/create" ? "group:text-aspargus group-focus:text-aspargus" : ""}`}></i>
                        <p className={`${location.pathname === "/create" ? "group:text-aspargus group-focus:text-aspargus" : ""} text-sm text-zinc-400 group-hover:text-aspargus`} >Create new envelope</p>
                    </Link>
                </li>
                <li>
                    <Link
                        className="group flex flex-col items-center gap-3"
                        to={location.pathname !== "/edit" ? "/edit" : "/"}>
                        <i className={`group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-pen-to-square ${location.pathname === "/edit" ? "group:text-aspargus group-focus:text-aspargus" : ""}`}></i>
                        <p className={`${location.pathname === "/edit" ? "group:text-aspargus group-focus:text-aspargus" : ""} text-sm text-zinc-400 group-hover:text-aspargus`} >Edit envelope</p>
                    </Link>
                </li>
                <li>
                    <Link
                        className="group flex flex-col items-center gap-3"
                        to={location.pathname !== "/delete" ? "/delete" : "/"}>
                        <i className={`group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-trash-can ${location.pathname === "/delete" ? "group:text-aspargus group-focus:text-aspargus" : ""}`}></i>
                        <p className={`${location.pathname === "/delete" ? "group:text-aspargus group-focus:text-aspargus" : ""} text-sm text-zinc-400 group-hover:text-aspargus`} >Delete envelope</p>
                    </Link>
                </li>
                <li>
                    <Link
                        className="group flex flex-col items-center gap-3"
                        to={location.pathname !== "/transfer" ? "/transfer" : "/"}>
                        <i className={`group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-money-bill-transfer ${location.pathname === "/transfer" ? "group:text-aspargus group-focus:text-aspargus" : ""}`}></i>
                        <p className={`${location.pathname === "/transfer" ? "group:text-aspargus group-focus:text-aspargus" : ""} text-sm text-zinc-400 group-hover:text-aspargus`} >Transfer between envelopes</p>
                    </Link>
                </li>
                <li>
                    <Link className="group flex flex-col items-center gap-3" to={location.pathname !== "/add-balance" ? "/add-balance" : "/"}>
                        <i className={`group-hover:text-aspargus text-2xl text-zinc-400 fa-solid fa-circle-dollar-to-slot ${location.pathname === "/add-balance" ? "group:text-aspargus group-focus:text-aspargus" : ""}`}></i>
                        <p className={`${location.pathname === "/add-balance" ? "group:text-aspargus group-focus:text-aspargus" : ""} text-sm text-zinc-400 group-hover:text-aspargus`} >Add balance</p>
                    </Link>
                </li>

            </ul>

        </nav>
    )
};

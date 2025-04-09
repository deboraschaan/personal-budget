import { React, useState } from "react";
import { useNavigate } from 'react-router';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
        <nav className="sticky top-0 bg-white items-center 
        flex flex-row justify-between
        px-10 py-5 shadow-md shadow-zinc-900/5 transition duration-500
        sm:px-6 lg:px-8">
            <h2 className="text-aspargus">Personal Budget</h2>
            <button
                onClick={handleClick}
                data-open={isOpen}
                aria-expanded={isOpen}
                className={`group ${({ isActive }) => isActive ? "active" : ""}`}
            >
                <i className={`fa-solid fa-bars
                group-hover:text-aspargus
                group:text-zinc-400 transition text-2xl
                ${isOpen ? "group:text-aspargus group-focus:text-aspargus" : ""}`}
                >
                </i>
            </button>

        </nav>
    )
};
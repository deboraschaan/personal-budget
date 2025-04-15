import React from "react";
import { NavLink, useLocation } from "react-router";

export default function NavItem(props) {
    const location = useLocation();

    return (
        <>
            <NavLink
                className={`group hover:text-aspargus py-4 flex gap-3 items-center ${props.direction}`}
                to={location.pathname !== props.to ? props.to : "/"}
            >
                <i
                    className={`group-hover:text-aspargus 
                    text-2xl text-zinc-400 fa-solid 
                    ${props.icon}
                    ${location.pathname === props.to ? "group-focus:text-aspargus" : ""}
                `}>
                </i>

                <p
                    className={`group-hover:text-aspargus text-zinc-400 text-md
                    ${location.pathname === props.to ? "group:text-aspargus group-focus:text-aspargus" : ""}`}>
                    {props.title}
                </p>
            </NavLink>
        </>
    )
};

/* 
    const navigation = useNavigate();
    const handleClick = () => {
        if (!isOpen) {
            navigate("/options");
        } else {
            navigate("/");
        }
        setIsOpen(!isOpen);
    }
*/
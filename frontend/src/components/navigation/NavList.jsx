import React from "react";
import { useLocation } from "react-router";
import NavItem from "./NavItem";

export default function NavList() {
    const location = useLocation();

    return (
        <>
            <div
                id="navlist-sm"
                className="lg:invisible"
            >


                <NavItem
                    to="/options"
                    icon="fa-bars"
                />

                <div
                    className={` 
                    fixed z-50 right-8 top-25
                    ${location.pathname === "/options" ? "visible" : "invisible"}
                    rounded-lg mx-auto bg-white
                    border-zinc-200 border p-4
                    `}
                >
                    <ul className="divide-y divide-zinc-100 -mt-2 p-6">
                        <li>
                            <NavItem
                                title="Search envelope"
                                icon="fa-magnifying-glass"
                                to="/search"
                                direction="flex-row"
                            />
                        </li>
                        <li>
                            <NavItem
                                title="Create new envelope"
                                icon="fa-plus"
                                to="/create"
                                direction="flex-row"
                            />
                        </li>
                        <li>
                            <NavItem
                                title="Edit envelope"
                                icon="fa-pen-to-square"
                                to="/edit"
                                direction="flex-row"
                            />
                        </li>
                        <li>
                            <NavItem
                                title="Delete envelope"
                                icon="fa-trash-can"
                                to="/delete"
                                direction="flex-row"
                            />
                        </li>
                        <li>
                            <NavItem
                                title="Transfer between envelopes"
                                icon="fa-money-bill-transfer"
                                to="/transfer"
                                direction="flex-row"
                            />
                        </li>
                        <li>
                            <NavItem
                                title="Add balance"
                                icon="fa-circle-dollar-to-slot"
                                to="/add-balance"
                                direction="flex-row"
                            />
                        </li>

                    </ul>
                </div>
            </div>

            <ul
                id="navbar-lg"
                className="hidden lg:flex lg:justify-between lg:w-full lg:mr-20">
                <li>
                    <NavItem
                        title="Search envelope"
                        icon="fa-magnifying-glass"
                        to="/search"
                        direction="flex-col"
                    />
                </li>
                <li>
                    <NavItem
                        title="Create new envelope"
                        icon="fa-plus"
                        to="/create"
                        direction="flex-col"
                    />
                </li>
                <li>
                    <NavItem
                        title="Edit envelope"
                        icon="fa-pen-to-square"
                        to="/edit"
                        direction="flex-col"
                    />
                </li>
                <li>
                    <NavItem
                        title="Delete envelope"
                        icon="fa-trash-can"
                        to="/delete"
                        direction="flex-col"
                    />
                </li>
                <li>
                    <NavItem
                        title="Transfer between envelopes"
                        icon="fa-money-bill-transfer"
                        to="/transfer"
                        direction="flex-col"
                    />
                </li>
                <li>
                    <NavItem
                        title="Add balance"
                        icon="fa-circle-dollar-to-slot"
                        to="/add-balance"
                        direction="flex-col"
                    />
                </li>
            </ul>
        </>
    )
};

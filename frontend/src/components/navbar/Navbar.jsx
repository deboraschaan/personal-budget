import React from "react";
import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router";
// import { handleSearch, handleBlob } from '../utils/index.js'
let handleSearch;
let handleOptions;

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="border-b-1">
            <div className="flex flex-row justify-evenly my-10">
                <NavbarButton onClick={() => navigate('/')} variant={'home'} icon="fa-solid fa-home" />
                <NavbarButton onClick={handleSearch} variant={'search'} icon="fa-solid fa-circle-plus" />
                <NavbarButton onClick={handleOptions} variant={'options'} icon="fa-solid fa-bars" />
            </div>
            <div className="hidden flex-row justify-evenly my-10">
                <NavbarButton onClick={() => navigate('/')} variant={'home'} icon="fa-solid fa-money-bill-transfer" />
                <NavbarButton onClick={handleSearch} variant={'search'} icon="fa-solid fa-pen-to-square" />
                <NavbarButton onClick={handleOptions} variant={'options'} icon="fa-solid fa-money-bills" />
            </div>
            <div className="hidden flex-row justify-evenly my-10">
                <NavbarButton onClick={() => navigate('/')} variant={'home'} icon="fa-solid fa-magnifying-glass" />
                <NavbarButton onClick={handleSearch} variant={'search'} icon="fa-solid fa-filter" />
                <NavbarButton onClick={handleOptions} variant={'options'} icon="fa-solid fa-sort" />
            </div>
        </nav>
    )
};
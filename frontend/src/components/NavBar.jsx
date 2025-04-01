import React from "react";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-row justify-evenly">
                <div className="text-center">
                    <i class="fa-solid fa-user"></i>
                    <p>Profile</p>
                </div>
                <div className="text-center">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>Search Envelope</p>
                </div>
                <div className="text-center">
                    <i class="fa-solid fa-plus"></i>
                    <p>Add Envelope</p>
                </div>

            </div>
        </>
    )
};
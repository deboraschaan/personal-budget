import React from "react";
import { Outlet } from "react-router";

export default function Dashboard({ children }) {

    return (
        <div className="min-w-full">
            {children}
            <Outlet></Outlet>
        </div>
    )
}
import React from "react";
import EnvelopeItem from "../envelope-item/EnvelopeItem";
import { useLocation } from "react-router";

// <EnvelopeItem title={props.category} icon="fa-solid fa-envelope" color={props.color} budget={props.budget} />

export default function EnvelopeList() {
    const location = useLocation();
    // Map list of envelopes;
    return (
        <>
            <div
                id="backdrop"
                className={`w-full h-full bg-zinc-200 z-40 absolute
                ${location.pathname === "/" || location.pathname === "/search" ? "opacity-0" : "opacity-60"}`}
            >
            </div>

            <main
                className={`${location.pathname === "/search" ? "invisible" : "visible"}
                mx-7 my-6`}
            >
                <ul className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                    <li>
                        <EnvelopeItem title="Groceries" icon="fa-solid fa-envelope" color="text-afternoon" budget="500" />
                    </li>
                    <li>
                        <EnvelopeItem title="Bills" icon="fa-solid fa-envelope" color="text-peach" budget="1000" />
                    </li>
                    <li>
                        <EnvelopeItem title="Gas" icon="fa-solid fa-envelope" color="text-barbie" budget="2000" />
                    </li>
                </ul>
            </main>
        </>
    )
};
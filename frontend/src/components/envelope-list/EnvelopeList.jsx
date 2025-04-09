import React from "react";
import EnvelopeItem from "../envelope-item/EnvelopeItem";
import { useLocation } from "react-router";

// <EnvelopeItem title={props.category} icon="fa-solid fa-envelope" color={props.color} budget={props.budget} />

export default function EnvelopeList() {
    const location = useLocation();
    // Map list of envelopes;
    return (
        <main
            className={`${location.pathname === "/search" ? "invisible" : "visible"} mx-4 my-6`}>
            <div id="backdrop" className="opacity-0 bg-zinc-400 "></div>
            <ul></ul>
            <EnvelopeItem title="Groceries" icon="fa-solid fa-envelope" color="text-afternoon" budget="500" />
            <EnvelopeItem title="Bills" icon="fa-solid fa-envelope" color="text-peach" budget="1000" />
            <EnvelopeItem title="Gas" icon="fa-solid fa-envelope" color="text-barbie" budget="2000" />
        </main>
    )
};
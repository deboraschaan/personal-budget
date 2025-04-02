import React from "react";
import EnvelopeItem from "../envelope-item/EnvelopeItem";

// <EnvelopeItem title={props.category} icon="fa-solid fa-envelope" color={props.color} budget={props.budget} />

export default function EnvelopeList() {
    // Map list of envelopes;
    return (
        <main className="mx-4 my-6">
            <EnvelopeItem title="Groceries" icon="fa-solid fa-envelope" color="text-afternoon" budget="500" />
            <EnvelopeItem title="Bills" icon="fa-solid fa-envelope" color="text-peach" budget="1000" />
            <EnvelopeItem title="Gas" icon="fa-solid fa-envelope" color="text-barbie" budget="2000" />
        </main>
    )
};
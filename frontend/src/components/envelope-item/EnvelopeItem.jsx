import React from "react";

export default function EnvelopeItem(props) {
    return (
        <section className="border-black border-1 rounded-md p-4 flex gap-3 mb-4">
            <i className={`text-3xl my-auto ${props.icon} ${props.color}`} ></i>
            <div>
                <h3 className="font-medium">{props.title}</h3>
                <div className="flex gap-2">
                    <p>Budget: </p>
                    <p>${props.budget}</p>
                </div>
            </div>

        </section>
    )
}
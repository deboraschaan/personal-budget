import React from "react";

export default function Card({ id, color, category, budget }) {
    return (
        <>
            <div
                id={id}
                className="card">
                <i className={`col-span-1 row-span-2 text-3xl mt-0.5 fa-solid fa-envelope text-${color}`}></i>
                <h3 className="col-start-2 col-end-6 font-medium">{category}</h3>
                <p className="col-start-2 col-end-6">Budget: ${budget}</p>
            </div>
        </>
    )
};
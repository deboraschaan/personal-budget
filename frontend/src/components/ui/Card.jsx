import React from "react";

export default function Card({ envelope }) {
    return (
        <>
            <div className="card">
                <i className={`col-span-1 row-span-2 text-3xl mt-0.5 fa-solid fa-envelope text-${envelope.color}`}></i>
                <h3 className="col-start-2 col-end-6 font-medium">{envelope.category}</h3>
                <p className="col-start-2 col-end-6">Budget: ${envelope.budget}</p>
            </div>
        </>
    )
};
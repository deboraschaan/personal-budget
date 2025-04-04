import React from "react";

export default function ColorButton(props) {
    return (
        <>
            <svg className="w-10 h-10">
                <circle cx="20" cy="20" r="15" className={`stroke-0 hover:stroke-2 hover:stroke-zinc-400 active:stroke-1 active:stroke-red-500 ${props.color}`} ></circle>
            </svg>
        </>
    )
}
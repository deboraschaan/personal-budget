import React from "react";

export default function SearchBar() {
    return (
        <div
            className="m-6 w-dvw"
        >
            <form
                action
                novalidate
                role="search"
                className="py-3 rounded-md border bg-white
                fixed top-20 
                border-zinc-900/10 shadow-md shadow-zinc-800/5
                focus-within:border-aspargus"
            >
                <div
                    className="relative flex"
                >
                    <i
                        className="fa-solid fa-magnifying-glass absolute top-1 
                        left-5 text-lg text-zinc-400"
                    >
                    </i>
                    <input
                        type="search"
                        id="search-input"
                        placeholder="Search envelope..."
                        className="ml-15 outline-0"
                    />
                </div>
            </form>
        </div>
    )
}
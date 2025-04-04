import React from "react";

export default function SearchBar() {
    return (
        <>
            <div className="m-4 p-4 appearance-none rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:max-w-xl">

                <form action novalidate role="search">
                    <div className="relative flex">

                        <i className="fa-solid fa-magnifying-glass absolute top-1 left-5 text-lg text-zinc-400"></i>
                        <input
                            type="search"
                            id="search-input"
                            placeholder="Search envelope..."
                            className=" ml-15 " />
                    </div>
                </form>
            </div>
        </>
    )
}
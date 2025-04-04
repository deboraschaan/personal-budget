import React from "react";
import SubmitButton from "../buttons/SubmitButton";
import ColorButton from "../buttons/ColorButton";

export default function ModalForm(props) {

    switch (props.type) {
        case "create":
            return (
                <div>
                    <form id="form-create" className="flex flex-col space-y-10" action="/create">
                        <h2 className="flex mb-6 text-zinc-900 justify-center items-center font-semibold ">
                            <span className="ml-3">
                                Create new envelope
                            </span>
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label form="form-create" htmlFor="category">Name a category:</label>
                            <input form="form-create" type="text" id="category" required placeholder="Groceries, Bills, Gas..." className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount">Define a budget:</label>
                            <input id="amount" form="form-create" type="number" placeholder="Amount $" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pick-color">Select a color:</label>
                            <br />
                            <div className="grid grid-cols-5 gap-2" >
                                <ColorButton color="fill-aspargus" />
                                <ColorButton color="fill-barbie" />
                                <ColorButton color="fill-chocolate" />
                                <ColorButton color="fill-celeste" />
                                <ColorButton color="fill-blush" />
                                <ColorButton color="fill-lime" />
                                <ColorButton color="fill-peach" />
                                <ColorButton color="fill-tangerina" />
                                <ColorButton color="fill-joy" />
                                <ColorButton color="fill-ennui" />
                            </div>
                        </div>
                        <SubmitButton />

                    </form>

                </div>
            );
        case "edit":
            return (
                <div>
                    <input />

                </div>
            );
        case "transfer":
            return (
                <div>
                    <input />

                </div>
            );
        case "add-balance":
            return (
                <div>
                    <input />

                </div>
            );

        default:
            break;
    }

};
import React from "react";
import ColorButton from "../buttons/ColorButton";
import SubmitButton from "../buttons/SubmitButton";

export default function CreateForm() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label
                    form="form-create"
                    htmlFor="create-category">
                    Name a category:
                </label>
                <input
                    form="form-create"
                    type="text"
                    id="create-category"
                    required
                    placeholder="Groceries, Bills, Gas..."
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="create-amount">Define a budget:
                </label>
                <input
                    id="create-amount"
                    form="form-create"
                    type="number"
                    placeholder="Amount $"
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="create-color">Select a color:
                </label>
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
            <SubmitButton id="submit-create" value="Create" />
        </>
    )
};
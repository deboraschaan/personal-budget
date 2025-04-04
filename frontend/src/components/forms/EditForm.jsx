import React from "react";
import SubmitButton from "../buttons/SubmitButton";
import ColorButton from "../buttons/ColorButton";

export default function EditForm(props) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label
                    form="form-edit"
                    htmlFor="edit-category">Edit the category:
                </label>
                <p className="text-sm text-zinc-400">Previous category: {props.category}</p>

                <input
                    form="form-edit"
                    type="text"
                    id="edit-category"
                    placeholder={props.value}
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="edit-amount">Redefine budget:
                </label>
                <p className="text-sm text-zinc-400">Previous budget: {props.budget}</p>
                <input
                    id="edit-amount"
                    form="form-edit"
                    type="number"
                    placeholder="$"
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="edit-color">Change color:
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
            <SubmitButton id="submit-edit" value="Edit" />
        </>
    )
};
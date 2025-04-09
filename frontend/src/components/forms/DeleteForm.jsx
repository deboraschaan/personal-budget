import React from "react";
import SubmitButton from "../buttons/SubmitButton";

export default function DeleteForm(props) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label
                    className="text-sm"
                    form="form-delete"
                    htmlFor="delete-select">
                    Select an envelope:
                </label>
                <select
                    form="form-delete"
                    type="select"
                    id="delete-select"
                    required
                    className="text-zinc-400 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" >
                    <option className="text-zinc-400" value="">
                        Choose an option
                        <i className="fa-solid fa-caret-down "></i>
                    </option>
                    {props.envelopes}
                </select>
            </div>
            <SubmitButton id="submit-delete" value="Delete" />
        </>
    )
};
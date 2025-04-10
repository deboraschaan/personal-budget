import React from "react";
import SubmitButton from "../buttons/SubmitButton";

export default function AddBalanceForm() {
    return (
        <>
            <div className="md:grid-cols-2 md:grid-flow-col md:gap-x-20 grid gap-5">

                <div className="flex flex-col gap-3">
                    <p className="text-sm">To one or more:</p>
                    <select
                        form="form-balance"
                        className="min-w-0 flex-auto
                        rounded-md border border-zinc-900/10 
                        px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400
                        focus:border-aspargus 
                        focus:outline-hidden text-sm" >
                        <option value="one">One</option>
                        <option value="more">More</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm">How to distribute:</p>
                    <select
                        form="form-balance"
                        className="min-w-0 flex-auto rounded-md border
                        border-zinc-900/10 bg-white px-3 py-2 shadow-md
                        shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus 
                        text-sm" >
                        <option value="evenly">Evenly</option>
                        <option value="specific">Specific</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 md:row-span-2">
                    <label
                        className="text-sm"
                        htmlFor="balance-amount">Amount:
                    </label>
                    <input
                        id="balance-amount"
                        form="form-balance"
                        type="number"
                        placeholder="$"
                        className="min-w-0 flex-auto appearance-none rounded-md border
                         border-zinc-900/10 px-3 py-4 max-h-10 shadow-md shadow-zinc-800/5
                        placeholder:text-zinc-400 focus:border-aspargus outline-0
                        text-sm" />
                </div>
            </div>
            <SubmitButton id="submit-balance" value="Add" />
        </>
    )
};
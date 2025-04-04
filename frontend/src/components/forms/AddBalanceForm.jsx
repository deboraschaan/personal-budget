import React from "react";
import SubmitButton from "../buttons/SubmitButton";

export default function AddBalanceForm() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <select form="form-balance" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" >
                    <option value="">
                        One or more
                    </option>
                    <option value="one">One</option>
                    <option value="more">More</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <select form="form-balance" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" >
                    <option value="">
                        How to distribute
                    </option>
                    <option value="evenly">Evenly</option>
                    <option value="specific">Specific</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="balance-amount">Amount:
                </label>
                <input
                    id="balance-amount"
                    form="form-balance"
                    type="number"
                    placeholder="$"
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
            </div>
            <SubmitButton id="submit-balance" value="Add" />
        </>
    )
};
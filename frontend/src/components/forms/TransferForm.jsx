import React from "react";
import SubmitButton from "../buttons/SubmitButton";

export default function TransferForm() {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 md:gap-x-10">

                <div className="flex flex-col gap-2">
                    <label
                        form="form-transfer"
                        htmlFor="transfer-from">
                        From:
                    </label>
                    <input
                        form="form-transfer"
                        type="text"
                        id="transfer-from"
                        required
                        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        form="form-transfer"
                        htmlFor="transfer-to">
                        To:
                    </label>
                    <input
                        form="form-transfer"
                        type="text"
                        id="transfer-to"
                        required
                        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label
                        htmlFor="transfer-amount">Amount:
                    </label>
                    <input
                        id="transfer-amount"
                        form="form-transfer"
                        type="number"
                        placeholder="$"
                        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-aspargus focus:ring-4 focus:ring-aspargus/10 focus:outline-hidden sm:text-sm" />
                </div>
            </div>
            <SubmitButton id="submit-transfer" value="Transfer" />
        </>
    )
};
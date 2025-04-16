import React from "react";

export default function Input({ type = "text", id, label, name, value, onChange, placeholder, htmlFor, className }) {


    return (
        <>
            <label
                className="block text-sm text-left"
                htmlFor={htmlFor}
            >
                {label && <span>{label}</span>}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={className}
                    placeholder={placeholder}
                    id={id}
                />

            </label>
        </>
    )
};

/* 
<input
                        id="balance-amount"
                        form="form-balance"
                        type="number"
                        placeholder="$"
                        className="min-w-0 flex-auto appearance-none rounded-md border
                         border-zinc-900/10 px-3 py-4 max-h-10 shadow-md shadow-zinc-800/5
                        placeholder:text-zinc-400 focus:border-aspargus outline-0
                        text-sm" />
*/

/* 
    if (type === "radio") {
        return (
            <>
                <label
                    className="block text-sm text-left"
                    htmlFor={htmlFor}
                >
                    {label && <span>{label}</span>}
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={className}
                        id={id}
                    />

                </label>
            </>
        )
    }
*/
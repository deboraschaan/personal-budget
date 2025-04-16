import React from "react";

export default function SelectInput({ type = "select", htmlFor, label, name, id, className, form, children }) {
    return (
        <>
            <label
                className="text-sm text-left"
                htmlFor={htmlFor}
            >
                {label}

                <select
                    name={name}
                    id={id}
                    className={`
                        input-class
                        ${className}`}
                    form={form}
                    type={type}
                >
                    {children}
                </select>
            </label>
        </>
    )
}
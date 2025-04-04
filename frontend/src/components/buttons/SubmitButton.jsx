import React from "react";

export default function SubmitButton(props) {
    return (
        <input
            type="submit"
            value={props.value}
            className="inline-flex items-center justify-center rounded-md py-2 px-3 outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:bg-aspargus/50"
            id={props.id} >
        </input>
    )
}
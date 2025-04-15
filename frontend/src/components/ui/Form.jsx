import React from "react";

export default function Form({ id, method, action, title, children }) {
    return (
        <>
            <form
                id={id}
                method={method}
                className="form"
                action={action}
            >

                <h2 className="headline">{title}</h2>

                {children}

            </form>
        </>
    )
};

/*                 className="flex flex-col space-y-10"
  */
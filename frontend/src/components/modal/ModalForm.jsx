import React from "react";

export default function ModalForm(props) {

    switch (props.type) {
        case "create":
            return (
                <div className="block">
                    <p>Text</p>
                    <input type="text" placeholder="Category" />
                    <input type="number" placeholder="Amount" />
                    <input type="number" placeholder="Choose a color" />

                </div>
            );
        case "edit":
            return (
                <div>
                    <input />

                </div>
            );
        case "transfer":
            return (
                <div>
                    <input />

                </div>
            );
        case "add-balance":
            return (
                <div>
                    <input />

                </div>
            );

        default:
            break;
    }

};
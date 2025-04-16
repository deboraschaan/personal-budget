import React from "react";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { handleSubmit, handleClick } from "../../utils/helpers";
import SelectInput from "../ui/SelectInput";

export default function DeleteForm() {
    let envelopeList = [];

    return (
        <>
            <Form
                id="form-delete"
                method="dialog"
                title="Delete envelope"
                action={handleSubmit}
            >


                <div className="flex flex-col gap-2">
                    <SelectInput
                        htmlFor="form-delete"
                        label="Select an envelope:"
                        name="Delete"
                        id="form-delete"
                        form="form-delete"
                        className="input-class"
                        required
                    >
                        <option className="text-zinc-400" value="">
                            Choose an option
                        </option>
                        {envelopeList.forEach(envelope => {
                            return (
                                <option className="text-zinc-400" value={envelope.category}>
                                    {envelope.category}
                                </option>
                            )
                        })}

                    </SelectInput>

                </div>

            </Form >

            <Button
                type="submit"
                className="submit-button"
                value="Delete"
                onClick={handleClick}
            >
                Submit
            </Button>

        </>
    )
};
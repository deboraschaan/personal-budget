import React from "react";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { handleSubmit, handleChange, handleClick } from "../../utils/helpers";
import Input from "../ui/Input";


export default function TransferForm() {

    return (
        <>
            <Form
                id="form-transfer"
                method="dialog"
                action={handleSubmit}
                title="Transfer Between Envelopes"
            >

                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        id="transfer-from"
                        required
                        placeholder="Choose an envelope"
                        onChange={handleChange}
                        form="form-transfer"
                        htmlFor="transfer-from"
                        label="From:"
                        className="input-class"
                    >
                    </Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        id="transfer-to"
                        required
                        placeholder="Choose an envelope"
                        onChange={handleChange}
                        form="form-transfer"
                        htmlFor="transfer-to"
                        label="To:"
                        className="input-class"
                    >
                    </Input>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <Input
                        type="number"
                        id="transfer-amount"
                        required
                        placeholder="How much"
                        onChange={handleChange}
                        form="form-transfer"
                        htmlFor="transfer-amount"
                        label="Amount:"
                        className="input-class"
                    >
                    </Input>
                </div>

            </Form>

            <Button
                type="submit"
                className="submit-button"
                value="Transfer"
                onClick={handleClick}
            >
                Submit
            </Button>
        </>
    )
};
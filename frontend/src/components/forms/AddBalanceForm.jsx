import React from "react";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { handleSubmit, handleChange, handleClick } from "../../utils/helpers";
import SelectInput from "../ui/SelectInput";
import Input from "../ui/Input";
import { Outlet } from "react-router";

export default function AddBalanceForm() {
    let amount;

    return (
        <>
            <Form
                id="form-add-balance"
                method="dialog"
                action={handleSubmit}
                title="Add Balance"
            >

                <div className="flex flex-col gap-3">
                    <SelectInput
                        label="To one or more envelopes:"
                        htmlFor="form-balance"
                        name="one-or-more"
                        id="form-balance"
                        form="form-add-balance"
                    >
                        <option value="one">One</option>
                        <option value="more">More</option>

                    </SelectInput>
                </div>

                <div className="flex flex-col gap-2">
                    <SelectInput
                        label="How to distribute:"
                        htmlFor="form-balance"
                        name="specific-evenly"
                        id="form-balance"
                        form="form-add-balance"
                    >
                        <option value="evenly">Evenly</option>
                        <option value="specific">Specific</option>

                    </SelectInput>

                </div>

                <div className="flex flex-col gap-2 md:row-span-2">
                    <Input
                        type="number"
                        id="balance-amount"
                        form="form-add-balance"
                        required
                        placeholder="$"
                        name="amount"
                        value={amount}
                        onChange={handleChange}
                        label="Amount:"
                        htmlFor="balance-amount"
                        className="input-class"

                    >
                    </Input>
                </div>

            </Form>

            <Button
                type="submit"
                className="submit-button"
                value="Add"
                onClick={handleClick}
            >
                Submit
            </Button>

        </>
    )
};
import React from "react";
import Button from "../ui/Button";
import SelectInput from "../ui/SelectInput";
import ColorCircle from "../ui/ColorCircle";
import Form from "../ui/Form";
import { handleSubmit, handleChange } from "../../utils/helpers";
import Input from "../ui/Input";

export default function CreateForm() {
    let category;
    let amount


    return (
        <>
            <Form
                id="form-create"
                method="dialog"
                action={handleSubmit}
                title="Create New Envelope"
            >

                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        id="create-category"
                        form="form-create"
                        required
                        placeholder="Groceries, Bills, Gas..."
                        name="category"
                        value={category}
                        onChange={handleChange}
                        label="Name a category:"
                        htmlFor="create-category"
                        className="input-class"
                    >
                    </Input>
                </div>

                <div className="flex flex-col gap-2">
                    <Input
                        type="number"
                        id="create-amount"
                        form="form-create"
                        required
                        placeholder="Amount $"
                        name="amount"
                        value={amount}
                        onChange={handleChange}
                        label="Define a budget:"
                        htmlFor="create-amount"
                        className="input-class"
                    >
                    </Input>
                </div>

                <div className="text-left mb-2">
                    <p className="text-sm">Select a color:</p>
                    <div className="grid grid-cols-5 gap-2">

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="aspargus"
                            name="select-color"
                            id="aspargus"
                            value="aspargus"
                            className="flex m-auto"
                            onChange={handleChange}
                            label={<ColorCircle color="fill-aspargus" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="barbie"
                            name="select-color"
                            id="barbie"
                            value="barbie"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-barbie" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="chocolate"
                            name="select-color"
                            id="chocolate"
                            value="chocolate"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-chocolate" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="celeste"
                            name="select-color"
                            id="celeste"
                            value="celeste"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-celeste" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="blush"
                            name="select-color"
                            id="blush"
                            value="blush"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-blush" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="lime"
                            name="select-color"
                            id="lime"
                            value="lime"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-lime" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="peach"
                            name="select-color"
                            id="peach"
                            value="peach"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-peach" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="tangerina"
                            name="select-color"
                            id="tangerina"
                            value="tangerina"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-tangerina" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="joy"
                            name="select-color"
                            id="joy"
                            value="joy"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-joy" />}
                        >
                        </Input>

                        <Input
                            form="form-create"
                            type="radio"
                            htmlFor="ennui"
                            name="select-color"
                            id="ennui"
                            value="ennui"
                            className="flex m-auto"
                            label={<ColorCircle color="fill-ennui" />}
                        >
                        </Input>
                    </div>

                </div>

            </Form>

            <Button
                type="submit"
                className="submit-button"
                value="Create"
                onClick={handleSubmit}
            >
                Submit
            </Button>

        </>
    )
};


/*             <div className="grid gap-4 md:grid-cols-2 md:grid-flow-col md:gap-x-20">
 */
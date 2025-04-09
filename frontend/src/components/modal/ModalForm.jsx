import React from "react";
import CreateForm from "../forms/CreateForm";
import EditForm from "../forms/EditForm";
import DeleteForm from "../forms/DeleteForm";
import TransferForm from "../forms/TransferForm";
import AddBalanceForm from "../forms/AddBalanceForm";

export default function ModalForm(props) {

    return (
        <>
            <form id={props.formId} method="dialog" className="flex flex-col space-y-10" action={props.action}>

                <h2 className="flex mb-6 text-zinc-900 justify-center items-center font-semibold ">
                    <span>
                        {props.formId === "form-create" && "Create New Envelope"}
                        {props.formId === "form-edit" && "Edit envelope"}
                        {props.formId === "form-delete" && "Delete envelope"}
                        {props.formId === "form-transfer" && "Transfer"}
                        {props.formId === "form-add-balance" && "Add Balance"}
                    </span>
                </h2>
                {props.formId === "form-create" && <CreateForm />}
                {props.formId === "form-edit" && <EditForm />}
                {props.formId === "form-delete" && <DeleteForm />}
                {props.formId === "form-transfer" && <TransferForm />}
                {props.formId === "form-add-balance" && <AddBalanceForm />}

            </form>
        </>
    )
};
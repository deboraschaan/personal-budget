import { useEffect, useState } from "react";
import Form from "../ui/Form";
// import fetchEnvelopes, editEnvelope

export default function FormContainer() {
    const [envelopes, setEnvelopes] = useState([]);

    useEffect(() => {
        //fetchEnvelopes().then(setEnvelopes);
    }, []);

    const handleEdit = async () => { setEnvelopes };
    // handleSubmit
    // handleChange
    // handleClick


    return <Form envelopes={envelopes} onEdit={handleEdit}></Form>

};
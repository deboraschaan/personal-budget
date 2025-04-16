import EnvelopeList from "../features/envelopes/EnvelopeList";
import { useEffect, useState } from "react";
import { fetchEnvelopes, editEnvelope } from "@/api/envelopes";

export default function EnvelopeContainer() {
    const [envelopes, setEnvelopes] = useState([]);

    useEffect(() => {
        fetchEnvelopes().then(setEnvelopes);
    }, []);

    const handleEdit = async (id) => {
        const updated = await editEnvelope(id);
        setEnvelopes(envelopes.map(env => env.id === id ? updated : env));
    };


    return <EnvelopeList envelopes={envelopes} onEdit={handleEdit} />;
}
import Card from "../../ui/Card";

export default function EnvelopeList({ envelopes }) {

    return (
        <>
            <ul className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                {envelopes.map(env => (
                    <li key={env.id}>
                        <Card category={env.category} budget={env.budget} color={env.color}></Card>
                    </li>
                ))}
            </ul>
        </>
    )
};


/* 
<main
                className={`${location.pathname === "/search" ? "invisible" : "visible"}
                mx-7 my-6`}
            >
*/
import React from "react";

export default function EnvelopeItem(props) {
    return (
        <section className="group relative border-zinc-200 border rounded-xl p-4 flex gap-3 mb-4 hover:border-aspargus">
            <div className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 bg-aspargus/10 group-hover:opacity-100">
            </div>
            <div className="relative overflow-hidden rounded-xl p-6 flex gap-3">
                <i className={`text-3xl mt-0.5 ${props.icon} ${props.color}`} ></i>
                <div>
                    <h3 className=" inset-0 font-medium">{props.title}</h3>
                    <div className="flex gap-2">
                        <p>Budget: </p>
                        <p>${props.budget}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

//<div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,var(--color-sky-50)),var(--quick-links-hover-bg,var(--color-sky-50)))_padding-box,linear-gradient(to_top,var(--color-indigo-400),var(--color-cyan-400),var(--color-sky-500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:var(--color-slate-800)]"></div>
//absolute -inset-px rounded-xl border-2 border-transparent opacity-0 bg-barbie group-hover:opacity-100
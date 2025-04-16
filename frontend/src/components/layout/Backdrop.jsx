export default function Backdrop({ onClick }) {
    return (
        <div
            className="fixed inset-0 bg-zinc-500/40 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out opacity-100"
            onClick={onClick}
        />
    );
};


/* 
<div
                id="backdrop"
                className={`w-full h-full bg-zinc-200 z-40 absolute
                ${location.pathname === "/" || location.pathname === "/search" ? "opacity-0" : "opacity-60"}`}
            >
            </div>
*/
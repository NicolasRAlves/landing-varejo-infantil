import * as React from "react";
import { ArrowUpIcon } from "lucide-react";

const Scroll = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setShow(window.scrollY > window.innerHeight);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`
        fixed bottom-6 right-6 z-50 transition-opacity duration-300 
        ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
        >
            <button
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-[#FEDBA3] hover:bg-[#fbcf8c] text-black px-4 py-2 rounded-full shadow-lg transition-all"
            >
                <span className="hidden sm:inline text-sm font-medium">Voltar ao topo</span>
                <div className="relative w-6 h-6 bg-white rounded-full flex items-center justify-center rotate-180">
                    <ArrowUpIcon className="w-3 h-3 text-black rotate-180" />
                </div>
            </button>
        </div>
    );
};

Scroll.displayName = "Scroll";

export { Scroll };

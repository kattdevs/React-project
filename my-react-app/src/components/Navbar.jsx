import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("");

    const links = ["home", "about", "skills", "projects", "contact"];
    
    return (
        <nav className="fixed top-8 w-full flex justify-center z-50">
            <div className="flex gap-6">

            {links.map((link) => (
                <a
                    key={link}
                    href={`#${link}`}
                    onClick={()=> setActive(link)}
                    className={`uppercase px-6 text-sm tracking-wider rounded-full backdrop-blur-xl border border-white/10 bg-white/5 transition-all duration-300
                        ${
                            active === link
                            ? "bg-white/15 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110"
                            : "hover: bg-white/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        }`}
                    >
                    {link}
                    </a>
            ))}

            </div>  
        </nav>
    );
};

export default Navbar;


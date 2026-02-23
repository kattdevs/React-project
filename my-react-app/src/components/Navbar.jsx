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
                    className={`uppercase px-6 text-sm tracking-wider rounded-full backdrop-blur-xl border border-rose-300/20 bg-rose-200/5 transition-all duration-300
                        ${
                            active === link
                            ? "bg-gradient-to-r from-rose-300/30 to-pink-300/30 shadow-[0_0_20px_rgba(244,114,182,0.5)] scale-110"
                            : "hover: bg-rose-300/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(244,114,182,0.4)]"
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


import { useState } from "react";

const Navbar = () => {
  //Tracks which section is currently active
  const [active, setActive] = useState("");
  //Navigation links array
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    //Fixed Navbar positioned at the top of the3 screen
    <nav className="fixed top-8 w-full flex justify-center z-50">
      <div className="flex gap-6">
        {/*Loop through navigation links*/}
        {links.map((link) => (
          <a
            key={link} //Unique key for React list rendering
            href={`#${link}`} //Scroll to matching section ID
            onClick={() => setActive(link)} //Set active link on click
            className={`uppercase px-6 text-sm tracking-wider rounded-full backdrop-blur-xl border border-rose-300/20 bg-rose-200/5 transition-all duration-300
                        ${
                          active === link
                            ? //Active link styling
                              "bg-gradient-to-r from-rose-300/30 to-pink-300/30 shadow-[0_0_20px_rgba(244,114,182,0.5)] scale-110"
                            : //Hover styling for inactive links
                              "hover: bg-rose-300/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(244,114,182,0.4)]"
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

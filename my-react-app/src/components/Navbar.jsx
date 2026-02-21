const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
           <div className="max-w-6xl mx auto flex justify-between items-center p-5">
            <h1 className="text-xl font-semibold tracking-wide">
                KT
            </h1>
            <div className="space-x-6 text-sm uppercase tracking-widest">
                <a href="home" className="hover:text-gray-400">Home</a>
                <a href="about" className="hover:text-gray-400">About</a>
                <a href="skills" className="hover:text-gray-400">Skills</a>
                <a href="projects" className="hover:text-gray-400">Projects</a>
                <a href="contact" className="hover:text-gray-400">Contact</a>
            </div>
           </div>
           </nav>
  
    );
};

export default Navbar;
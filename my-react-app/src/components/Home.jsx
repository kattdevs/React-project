const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
             <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                        Hi, I'm <br/>
                        <span className="text-white">KATLEGO TWALA</span>
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg">
                        Software Developer
                    </p>

                    <p className="mt-4 text-gray-300 italic">
                        "Where design meets functionality"
                    </p>
                </div>

                <div className="hidden md:block">
                    <div className="h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl backdrop-blur-lg border border-white/10 shadow-2xl"></div>
                    </div>
             </div>
             </section>
    );
};

export default Home;
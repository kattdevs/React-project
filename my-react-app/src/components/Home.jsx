import profilePic from '../assests/profile.jpg';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                    {/*LEFT SIDE -TEXT*/}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                            Hi, I'm <br/>
                            <span className="text-white">KATLEGO TWALA</span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-lg">
                            Software Developer
                        </p>

                        <p className=" mt-4 text-gray-300 italic">
                            "Where design meets functionality"
                        </p>
                    </div>

                    {/*RIGHT SIDE - IMAGE*/}
                    <div className="flex justify-center">
                        <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl">
                        <img
                        src={profilePic}
                        alt="Katlego Twala"
                        className="w-[300px] h-[400px] object-cover rounded-xl"
                        />  
                        </div>
                        </div>

                </div>
    </section>
    );
}

export default Home;
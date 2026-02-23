import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    //Hero Section
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      {/*Main content grid*/}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/*LEFT SIDE - INTRODUCTION TEXT*/}
        <div>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-rose-400 bg-clip-text text-transparent">
              KATLEGO TWALA
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">Software Developer</p>

          <p className=" mt-4 text-gray-300 italic">
            "Where design meets functionality"
          </p>
        </div>

        {/*RIGHT SIDE - PROFILE IMAGE*/}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-rose-200/10 to-pink-300/10 backdrop-blur-xl p-4 rounded-2xl border border-rose-300/20 shadow-[0_0_40px_rgba(244,114,182,0.25)]">
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
};

export default Home;

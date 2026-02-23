import cvFile from '../assets/cv.pdf';

const About = () => {
  return (
    //About Section
    <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/*Glass card container*/}
            <div className="bg-gradient-to-br from-rose-200/5 to-pink-300/10 backdrop-blur-xl p-8 rounded-2xl border border-rose-300/20 shadow-[0_0_40px_rgba(244,144,182,0.15)]">
                <h2 className="text-3xl font-serif mb-6">
                    About Me
                </h2>
{/*Personal description*/}
                <p className="text-gray-300 leading-relaxed">
                    I'm an ethusiastic and hardworking software developer with a strong passion for innovation and crativity.
                    My journey in tech has been liberating, constantly challenging me to think differently, solve problems and build meaningful solutions.
                    <br/><br/>
                    I take pride in being diligent and focused, always giving my best whether I'm learning something new or working on a project.
                    I believe in the power of technology to change lives and I'm excited to continue developing the skills that allow me to contribute to change.
                    <br/><br/>
                     Driven by curiosity and a deep love for technology, I am building a future I turn ideas into impactful solutions.
                </p>
{/*Download Resume button*/}
                <a href={cvFile} download className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-rose-300 to-pink-400 text-black font-semibold rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(244,144,182,0.4)] transition duration-300">
                    Resume
                </a>
                </div>

            </div>
    </section>
    );
};

export default About;

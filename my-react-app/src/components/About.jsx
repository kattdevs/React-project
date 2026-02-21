import cvFile from '../assets/cv.pdf';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="big-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                <h2 className="text-3xl font-serif mb-6">
                    About Me
                </h2>

                <p className="text-gray-300 leading-relaxed">
                    I'm an ethusiastic and hardworking software developer with a strong passion for innovation and crativity.
                    My journey in tech has been liberating, constantly challenging me to think differently, solve problems and build meaningful solutions.
                    <br/><br/>
                    I take pride in being diligent and focused, always giving my best whether I'm learning something new or working on a project.
                    I believe in the power of technology to change lives and I'm excited to continue developing the skills that allow me to contribute to change.
                    <br/><br/>
                     Driven by curiosity and a deep love for technology, I am building a future I turn ideas into impactful solutions.
                </p>

                <a href={cvFile} download className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
                    Download CV
                </a>
                </div>

            </div>
    </section>
    );
};

export default About;

//Array storing all project information
const projects = [
  {
    title: "Digital Clock",
    description:
      "A stylish, interactive digital clock with theme switching and 12/24-hour toogle. Features real-time updates and responsive design",
    github: "https://github.com/kattdevs/Digital-Clock",
    live: " https://digital-clockapp.netlify.app/",
  },
  {
    title: "Diamond Tech Website",
    description:
      "A fully responsive recreation of an existing corporate website built using Bootstrap and custom CSS.",
    github: "https://github.com/kattdevs/Diamond-Tech",
    live: " https://keen-croissant-b67496.netlify.app",
  },
  {
    title: "Interactive Quiz Game",
    description:
      "A collaborative web-based quiz application featuring real-time scoring, counting timer functionality and dynamic question rendering",
    github: "https://github.com/kattdevs/Quiz",
    live: "https://quizprj.netlify.app",
  },
];

const Projects = () => {
  return (
    //Projects section
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-center">Projects</h2>
        {/*Responsive grid layout*/}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index} //Unique Key for mapped elements
              className="bg-gradient-to-br from-rose-200/5 to pink-300/10 backdrop-blur-xl border border-rose-300/20 p-8 rounded-2xl shadow-[0_0_30px_rgba(244,144,182,0.15)] transition duration-300"
            >
              {/*Project Title*/}
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              {/*Project Description*/}
              <p className="text-gray-400 mb-6">{project.description}</p>
              {/*Buttons container*/}
              <div className="flex gap-4">
                {/*Github Repository link*/}
                <a
                  href={project.github}
                  target="_blank"
                  className="text-rose-200 border border-rose-300/20 px-4 py-2 rounded-md hover:bg-rose-300 hover:text-black transition"
                >
                  GitHub
                </a>
                {/*Live website link*/}
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-gradient-to-r from-rose-300 to-pink-400 text-black px-4 py-2 rounded-md hover:scale-105 transition"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

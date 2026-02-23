const projects = [
    {
        title: "Digital Clock",
        description: "A stylish, interactive digital clock with theme switching and 12/24-hour toogle. Features real-time updates and responsive design",
        github: "https://github.com/kattdevs/Digital-Clock",
        live: " https://digital-clockapp.netlify.app/"
    },
    {
        title: "Diamond Tech Website",
        description: "A fully responsive recreation of an existing corporate website built using Bootstrap and custom CSS.",
        github: "https://github.com/kattdevs/Diamond-Tech",
        live: " https://keen-croissant-b67496.netlify.app"
    },
    {
        title: "Interactive Quiz Game",
        description: "A collaborative web-based quiz application featuring real-time scoring, counting timer functionality and dynamic question rendering",
        github: "https://github.com/kattdevs/Quiz",
        live: "https://quizprj.netlify.app"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">  
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif mb-12 text-center">
                    Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                        key={index} 
                        className="big-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                                    GitHub
                                    </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-black bg-white px-4 py-2 rounded-md hover:bg-gray-300 transition"
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
}

export default Projects;
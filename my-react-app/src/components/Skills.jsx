const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "Github",
    "VS Code",
    "Bootstrap",
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-serif mb-12">
                    Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <div 
                        key={index} 
                        className="px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-lg hover:scale-105 transition">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
//Array of technical skills
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
    //Skills Section
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-12">Skills</h2>
        {/*Flex container for skill tags*/}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-rose-200/10 backdrop-blur-lg border border-rose-300/20 rounded-full shadow-[0_0_20px_rgba(244,144,182,0.2)] hover:scale-110 hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Nodewave",
    role: "Front End Engineer",
    period: "08/2025 - Present",
    description: "Developing a website for internal R&D processes, and a Chat AI & Dashboard for client companies, ensuring seamless integration from backend to frontend.",
  },
  {
    company: "Harian Kompas (Kompas.id)",
    role: "Front End Developer",
    period: "10/2024 - 04/2025",
    description: "Implemented linters, updated homepage components, and integrated external squad components seamlessly.",
  },
  {
    company: "Harian Kompas (Kompas.id)",
    role: "Front End Developer (Freelance)",
    period: "05/2023 - 09/2024",
    description: "Maintained Kompas.id's main website, developed key features like News Audio and Pemilu 2024 landing page.",
  },
  {
    company: "Harian Kompas (Kompas.id)",
    role: "Front End Developer (Intern)",
    period: "09/2022 - 04/2023",
    description: "Supported frontend maintenance, wrote unit tests using Vue Test Utils, and revamped Storybook components.",
  },
  {
    company: "Naluri",
    role: "Front End Developer",
    period: "03/2022 - 04/2022",
    description: "Created a fully responsive website based on Figma designs using HTML, CSS, Bootstrap, and JavaScript.",
  }
];

const Experience = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 snap-start flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-8xl font-black mb-12 md:mb-20 text-gray-900 dark:text-white tracking-tighter">EXPERIENCE</h2>
          <div className="space-y-0 border-t border-gray-200 dark:border-gray-800">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group py-12 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="text-base md:text-lg font-medium text-gray-500 mt-1">{exp.company}</div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

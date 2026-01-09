import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "Nodewave",
    period: "Aug 2025 - Present",
    description: "Developing a website for internal R&D processes, and a Chat AI & Dashboard for client companies, ensuring seamless integration from backend to frontend.",
    association: "Associated with Nodewave",
    link: null,
    tech: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "CMS Reportase Langsung",
    period: "Feb 2024 - Apr 2025",
    description: "An internal tool for managing Kompas.id article content—from creation to publication—streamlining editorial workflows with various functionalities.",
    association: "Associated with Harian Kompas",
    link: null,
    tech: ["Nuxt", "Vue.js", "Tailwind CSS"]
  },
  {
    title: "Pemilu 2024 Information Center",
    period: "Jan 2024 - Feb 2024",
    description: "A centralized platform for the 2024 General Election, providing comprehensive information on candidates, parties, and voting procedures to educate and inform the public.",
    association: "Associated with Harian Kompas",
    link: "https://www.kompas.id/pemilu-2024",
    tech: ["Nuxt", "Vue.js", "Tailwind CSS"]
  },
  {
    title: "News Audio Feature",
    period: "May 2023 - Sep 2024",
    description: "Text-to-speech integration for news articles, enhancing accessibility and user engagement on the main news platform.",
    association: "Associated with Harian Kompas",
    link: null,
    tech: ["Nuxt", "Vue.js", "Tailwind CSS"]
  }
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 snap-start flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 text-gray-900 dark:text-white tracking-tighter">
            SELECTED WORKS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

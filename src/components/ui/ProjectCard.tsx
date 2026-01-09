
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  description: string;
  association: string;
  link: string | null;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isLink = !!project.link;
  const Component = isLink ? motion.a : motion.div;

  return (
    <Component
      href={isLink ? project.link! : undefined}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col p-8 bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-300 ${
        isLink 
          ? "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer" 
          : "hover:border-gray-300 dark:hover:border-gray-700 cursor-default"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-colors">
          {project.period}
        </span>
        {isLink && (
          <ArrowUpRight className="w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        )}
      </div>

      <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${isLink ? "group-hover:text-primary" : ""} transition-colors`}>
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 group-hover:border-primary/10 transition-colors">
        <div className="p-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
          <Briefcase className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
        </div>
        {project.association}
      </div>
    </Component>
  );
};

export default ProjectCard;

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Online Marketplace for Writers and Students',
    image: '/edulinkwriters-screenshot.png', // Place the screenshot in the public folder with this name
    description: 'A platform connecting writers and students for academic and creative projects, featuring secure payments and real-time messaging.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Supabase'],
    challenges: 'Built scalable user authentication, integrated Supabase for real-time data, and optimized for high concurrency.',
    link: 'https://www.edulinkwriters.com'
  },
  {
    title: 'Betting Platform Web Application',
    image: '/apex-bet-screenshot.png', // Place the screenshot in the public folder with this name
    description: 'A robust web app for sports betting with live odds, user management, and transaction tracking.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Supabase'],
    challenges: 'Implemented secure payment flows, real-time odds updates, and scalable backend architecture.',
    link: 'https://apex-bet-rosy.vercel.app'
  },
  {
    title: 'Digital Restaurant QR Code System',
    image: '/cafe-qr-screenshot.png', // Place the screenshot in the public folder with this name
    description: 'A digital menu and ordering system for restaurants using QR codes, streamlining order management and customer experience.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Supabase'],
    challenges: 'Developed QR code generation, integrated real-time order updates, and ensured mobile responsiveness.',
    link: 'https://cafe-seven-zeta.vercel.app'
  }
];

const Projects = () => (
  <motion.section
    id="projects"
    className="py-20 px-6 bg-slate-900 dark:bg-slate-100"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(59,130,246,0.2)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mb-2">{project.challenges}</p>
              <a href={project.link} className="text-blue-500 hover:underline font-bold">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;

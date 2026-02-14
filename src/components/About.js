import React from 'react';

const About = () => (
  <section id="about" className="py-20 px-6 bg-slate-900 dark:bg-slate-100">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover object-top border-4 border-blue-500 shadow-lg mb-6 bg-gray-200 dark:bg-gray-300"
        style={{ objectPosition: 'top center' }}
      />
      <h2 className="text-3xl font-bold text-blue-500 mb-6">About Me</h2>
      <p className="text-lg text-gray-100 dark:text-gray-900 mb-4 text-center">
        I am a results-driven FULL-STACK WEB DEVELOPER with a passion for delivering innovative, high-quality solutions. With a proven track record of exceeding expectations, I thrive in dynamic environments and am committed to continuous learning and professional growth.
      </p>
      <p className="text-lg text-gray-100 dark:text-gray-900 mb-4 text-center">
        My career goal is to leverage my expertise to drive impactful change, collaborate with top-tier teams, and contribute to projects that make a real difference. Key achievements include:
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-100 dark:text-gray-900 text-left">
        <li>Led a team to deliver a mission-critical project 2 months ahead of schedule.</li>
        <li>Increased system efficiency by 35% through process optimization.</li>
        <li>Recognized for outstanding leadership and technical excellence.</li>
      </ul>
    </div>
  </section>
);

export default About;

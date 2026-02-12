import React from 'react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Tech Innovators Inc.',
    period: '2024 – Present',
    achievements: [
      'Collaborated with small companies on web and software development projects.',
      'Assisted in feature implementation, testing, debugging, and deployment.',
      'Worked within team environments using version control and structured workflows.'
    ]
  },
  {
    role: 'Frontend Engineer',
    company: 'Creative Solutions Ltd.',
    period: '2023 – 2025',
    achievements: [
      'Led UI redesign, improving user engagement by 40%.',
      'Implemented accessibility best practices across all products.',
      'Collaborated with cross-functional teams to deliver projects on time.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="py-20 px-6 bg-slate-900 dark:bg-slate-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-100 dark:bg-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-blue-500">{exp.role}</h3>
              <span className="text-gray-500 font-medium">{exp.period}</span>
            </div>
            <div className="text-lg font-medium text-gray-900 mb-2">{exp.company}</div>
            <ul className="list-disc pl-6 text-gray-700">
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

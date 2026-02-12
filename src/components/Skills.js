import React from 'react';

const skills = [
  { name: 'Python', icon: '🐍', level: 95 },
  { name: 'JavaScript', icon: '🟨', level: 92 },
  { name: 'React.js', icon: '⚛️', level: 90 },
  { name: 'Node.js', icon: '🟩', level: 88 },
  { name: 'Django', icon: '🌱', level: 85 },
  { name: 'SQL', icon: '🗄️', level: 90 },
  { name: 'PostgreSQL', icon: '🐘', level: 88 },
  { name: 'REST APIs', icon: '🔗', level: 93 },
  { name: 'HTML', icon: '📄', level: 95 },
  { name: 'CSS', icon: '🎨', level: 92 },
];

const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-slate-900 dark:bg-slate-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center space-x-4">
            <span className="text-3xl">{skill.icon}</span>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-lg text-gray-100 dark:text-gray-900">{skill.name}</span>
                <span className="text-sm text-blue-500 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-700" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

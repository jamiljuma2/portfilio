import React from 'react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Embu',
    period: '',
    details: ['Almost graduating', 'Active member of Tech Club']
  }
];

const Education = () => (
  <section id="education" className="py-20 px-6 bg-slate-900 dark:bg-slate-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="flex items-center bg-gray-100 dark:bg-gray-200 rounded-lg shadow-lg p-6">

            <div>
              <h3 className="text-xl font-semibold text-blue-500">{edu.degree}</h3>
              <div className="text-lg font-medium text-gray-900">{edu.institution}</div>
              <div className="text-gray-500 font-medium mb-2">{edu.period}</div>
              <ul className="list-disc pl-6 text-gray-700">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;

import React from 'react';

const testimonials = [
  {
    quote: 'A visionary leader and a true team player. Barasa Juma Jamil consistently delivers beyond expectations.',
    name: 'Jane Smith',
    title: 'CTO, Tech Innovators Inc.'
  },
  {
    quote: 'Their technical expertise and dedication are unmatched. A pleasure to work with.',
    name: 'Michael Lee',
    title: 'Lead Engineer, Creative Solutions Ltd.'
  },
  {
    quote: 'An inspiring professional who brings out the best in every project.',
    name: 'Sara Patel',
    title: 'Product Manager, Global Ventures'
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 bg-slate-900 dark:bg-slate-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-100 dark:bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
            <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7.97 7.97 0 004 12c0 2.21.9 4.21 2.35 5.65A7.97 7.97 0 0012 20c2.21 0 4.21-.9 5.65-2.35A7.97 7.97 0 0020 12c0-2.21-.9-4.21-2.35-5.65A7.97 7.97 0 0012 4c-2.21 0-4.21.9-5.65 2.35z" /></svg>
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <div className="font-bold text-blue-500">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

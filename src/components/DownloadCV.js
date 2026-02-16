import React from 'react';

const DownloadCV = () => {
  return (
    <section id="download-cv" className="py-20 px-6 bg-slate-900 dark:bg-slate-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-500 mb-6">Download My CV</h2>
      <p className="text-lg text-gray-100 dark:text-gray-900 mb-6 text-center max-w-xl">
        Interested in my experience and skills? Download my up-to-date CV below:
      </p>
      <a
        href="/cv.pdf"
        download
        className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors text-lg"
      >
        Download CV (PDF)
      </a>
    </section>
  );
};

export default DownloadCV;

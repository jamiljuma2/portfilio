import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadCapture = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      setSent(true);
    } catch {
      setSent(false);
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 w-[350px] max-w-[95vw] flex flex-col items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <h2 className="text-xl font-bold text-purple-700 mb-2">Hire Me</h2>
        {sent ? (
          <div className="text-green-600 font-semibold">Thank you! I will contact you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="px-4 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
              disabled={loading}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md transition-all hover:scale-105"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
        <button className="mt-4 text-gray-500 hover:text-purple-600" onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default LeadCapture;

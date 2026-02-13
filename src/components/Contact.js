import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      await emailjs.send(
        'service_3lrav57', // Your EmailJS service ID
        'template_7hh6prq', // Your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'bC5gqCwnbDaF5gnRm' // Your EmailJS public key
      );
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-slate-900 dark:bg-slate-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Contact</h2>
        <motion.form
          className="bg-gray-100 dark:bg-gray-200 rounded-lg shadow-lg p-8 flex flex-col space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
              className="p-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          />
          {error && <div className="text-red-500 font-semibold">{error}</div>}
          {success && <div className="text-green-600 font-semibold">Thank you! Your message has been sent.</div>}
          <motion.button
            type="submit"
            className="bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://linkedin.com" className="text-blue-500 hover:text-blue-700 text-lg flex items-center gap-1" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-xl"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" className="text-blue-500 hover:text-blue-700 text-lg flex items-center gap-1" aria-label="GitHub">
            <i className="fab fa-github text-xl"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

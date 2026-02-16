const express = require('express');
const router = express.Router();

const supabase = require('../utils/supabase');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email || typeof name !== 'string' || typeof email !== 'string') {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // Save lead to Supabase
    await supabase.from('leads').insert([
      {
        name,
        email,
        timestamp: new Date().toISOString()
      }
    ]);

    // Send notification email (example using nodemailer, configure SMTP in .env)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
        subject: 'New Lead from Portfolio Chatbot',
        text: `Name: ${name}\nEmail: ${email}`
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lead capture error' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const openai = require('../utils/openai');
const supabase = require('../utils/supabase');
const fs = require('fs');
const path = require('path');

// Load portfolio knowledge base
const portfolioPath = path.join(__dirname, '../portfolio_projects.json');
const portfolioProjects = JSON.parse(fs.readFileSync(portfolioPath, 'utf-8'));

router.post('/', async (req, res) => {
  try {
    const { message, userId } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }

    // Build context for OpenAI
    const context = `You are an AI chatbot for a portfolio website. Answer questions about the developer, their projects, skills, and services.\n\nPortfolio Projects:\n${portfolioProjects.map(p => `- ${p.name}: ${p.description}`).join('\n')}\n\nSkills: React.js, Node.js, Django, Supabase, PostgreSQL, Tailwind CSS\nRole: Full-Stack Web Developer available for remote jobs & freelance work.`;

    // Call OpenAI API with detailed error logging
    let aiReply = '';
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: context },
          { role: 'user', content: message }
        ],
        max_tokens: 200,
        temperature: 0.7
      });
      aiReply = completion.choices[0]?.message?.content || '';
    } catch (openaiError) {
      console.error('OpenAI API error:', openaiError.response?.data || openaiError.message || openaiError);
      aiReply = '';
    }

    // Save chat history to Supabase
    await supabase.from('chat_history').insert([
      {
        user_id: userId || null,
        message,
        response: aiReply,
        timestamp: new Date().toISOString()
      }
    ]);

    res.json({ reply: aiReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Chatbot error' });
  }
});

module.exports = router;

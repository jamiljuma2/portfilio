const express = require('express');
const router = express.Router();

const supabase = require('../utils/supabase');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    let query = supabase.from('chat_history').select('*').order('timestamp', { ascending: false }).limit(50);
    if (userId) query = query.eq('user_id', userId);
    const { data, error } = await query;
    if (error) throw error;
    res.json({ history: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'History fetch error' });
  }
});

module.exports = router;

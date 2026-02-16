import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import LeadCapture from './LeadCapture';

const NAVY = 'bg-gradient-to-br from-[#1a2236] to-[#3a2d6a]';
const PURPLE = 'bg-gradient-to-br from-[#6a4cff] to-[#a18fff]';

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! 👋 I am your AI assistant. Ask me anything about my portfolio, projects, or how to hire me.',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      let reply = data.reply;
      if (!reply || typeof reply !== 'string' || reply.trim() === '') {
        reply = 'Sorry, I could not generate a response. Please try again or check your connection.';
        console.error('Empty chatbot reply:', data);
      }
      setMessages((msgs) => [
        ...msgs,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      if (/hire|contact|work with/i.test(text)) {
        setShowLead(true);
      }
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        {
          id: Date.now() + 2,
          sender: 'bot',
          text: 'Sorry, something went wrong. Please try again.',
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-xl ${NAVY} text-white font-bold text-lg transition-all hover:scale-105`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI Chatbot"
      >
        <span className="flex items-center gap-2">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/></svg>
          Chat
        </span>
      </button>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-20 right-6 w-[350px] max-w-[95vw] h-[500px] max-h-[90vh] z-50 rounded-2xl shadow-2xl ${NAVY} bg-opacity-80 backdrop-blur-lg border border-white/10 flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center gap-2 p-4 border-b border-white/10">
              <img src="/avatar.png" alt="AI Avatar" className="w-8 h-8 rounded-full shadow-md" />
              <span className="text-white font-semibold text-lg">AI Chatbot</span>
              <button className="ml-auto text-white/70 hover:text-white" onClick={() => setOpen(false)} aria-label="Close Chat">×</button>
            </div>
            {/* Language Selector */}
            <div className="flex gap-2 px-4 py-2">
              <select value={language} onChange={e => setLanguage(e.target.value)} className="rounded-xl px-2 py-1 bg-white/80 text-black">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
              <a href="/cv.pdf" download className="ml-auto px-3 py-1 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold shadow-md hover:scale-105 transition-all">Download CV</a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener" className="ml-2 px-3 py-1 rounded-2xl bg-green-500 text-white font-bold shadow-md hover:scale-105 transition-all">WhatsApp</a>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {messages.map((msg) => (
                <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} timestamp={msg.timestamp} />
              ))}
              {loading && <TypingIndicator />}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSend(e.target.elements.chatInput.value);
                  e.target.reset();
                }}
                className="flex gap-2"
              >
                <input
                  name="chatInput"
                  type="text"
                  autoComplete="off"
                  placeholder={language === 'en' ? 'Type your question...' : language === 'es' ? 'Escribe tu pregunta...' : language === 'fr' ? 'Tapez votre question...' : language === 'de' ? 'Stellen Sie Ihre Frage...' : '输入你的问题...'}
                  className="flex-1 px-4 py-2 rounded-2xl bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-2xl font-bold shadow-md ${PURPLE} text-white transition-all hover:scale-105`}
                  disabled={loading}
                >
                  Send
                </button>
              </form>
            </div>
            {/* Lead Capture Modal */}
            <AnimatePresence>
              {showLead && (
                <LeadCapture onClose={() => setShowLead(false)} />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

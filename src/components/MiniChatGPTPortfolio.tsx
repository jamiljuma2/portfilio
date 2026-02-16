// MiniChatGPTPortfolio.tsx
import React, { useState, useRef, useEffect } from 'react';

// Helper: Rule-based bot reply engine
function getBotReply(message: string): string {
  const msg = message.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi'))
    return "Hello 👋 I'm Jamil’s AI assistant. Ask me about his skills, projects, or experience.";
  if (msg.includes('skills'))
    return "Jamil is a Full-Stack Developer specializing in Next.js, TypeScript, Supabase, Node.js, Firebase, system architecture, and scalable fintech platforms.";
  if (msg.includes('projects'))
    return "He built EduLink Writers, financial dashboards, authentication systems, ApexBet, Digital restaurant and modern SaaS applications.";
  if (msg.includes('experience'))
    return "Jamil focuses on building scalable full-stack applications with secure backend systems and clean UI/UX.";
  if (msg.includes('contact'))
    return "You can reach Jamil via LinkedIn or email in the contact section of this website.";
  if (msg.includes('cv') || msg.includes('resume'))
    return "You can download his CV from the Resume section above.";
  return "That’s a great question. Try asking about skills, projects, or experience.";
}

// Message type
type ChatMessage = {
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
};

const promptSuggestions = [
  "Tell me about your skills",
  "Show me your projects",
  "How can I contact you?",
  "Download your CV"
];

const MiniChatGPTPortfolio: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const msgEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to newest message
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Handle send
  const sendMessage = (msg: string) => {
    if (!msg.trim()) return;
    const userMsg: ChatMessage = {
      sender: 'user',
      text: msg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setTyping(true);

    // Simulate bot reply delay
    setTimeout(() => {
      const botReply: ChatMessage = {
        sender: 'bot',
        text: getBotReply(msg),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
      setLoading(false);
      setTyping(false);
    }, 600 + Math.random() * 400);
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(input);
  };

  // Chat panel UI
  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300"
          aria-label="Open Chat"
          onClick={() => setOpen(true)}
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/>
          </svg>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-0 flex items-end justify-end z-50">
          <div className="w-full max-w-md h-[80vh] m-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl flex flex-col border border-blue-500 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-900 rounded-t-2xl">
              <div>
                <span className="font-bold text-lg text-blue-400">Jamil Assistant</span>
                <span className="ml-2 text-xs text-green-400 bg-green-900 px-2 py-1 rounded">Online</span>
              </div>
              <button
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Close Chat"
                onClick={() => setOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 custom-scrollbar">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <div className="mb-4 text-sm">Try a quick prompt:</div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {promptSuggestions.map(s => (
                      <button
                        key={s}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-600 transition"
                        onClick={() => sendMessage(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-md mb-1 transition-all duration-300
                    ${msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-slate-800 text-blue-200 rounded-bl-sm'
                    }`}
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    <div className="font-medium">{msg.text}</div>
                    <div className="text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
              {/* Typing Indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 text-blue-200 px-4 py-2 rounded-2xl shadow-md mb-1 flex items-center gap-2">
                    <span className="animate-bounce w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="animate-bounce w-2 h-2 bg-blue-300 rounded-full delay-75"></span>
                    <span className="animate-bounce w-2 h-2 bg-blue-200 rounded-full delay-150"></span>
                    <span className="text-xs text-gray-400 ml-2">Assistant is typing...</span>
                  </div>
                </div>
              )}
              <div ref={msgEndRef} />
            </div>

            {/* Input Bar */}
            <div className="sticky bottom-0 px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-b-2xl flex items-center glassmorphism">
              <input
                type="text"
                className="flex-1 bg-white/10 backdrop-blur-lg border border-blue-500 rounded-2xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium transition-all"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                autoFocus
              />
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 font-bold transition"
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar & Glassmorphism Styles */}
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3B82F6 #111827;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: #111827;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3B82F6;
          border-radius: 4px;
        }
        .glassmorphism {
          background: rgba(30, 41, 59, 0.7);
          box-shadow: 0 8px 32px rgba(59,130,246,0.15);
          backdrop-filter: blur(12px);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default MiniChatGPTPortfolio;
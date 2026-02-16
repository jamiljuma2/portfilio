// MiniChatGPTPortfolio.tsx
import React, { useState, useRef, useEffect } from 'react';

// Helper: Rule-based bot reply engine
function getBotReply(message: string): string {
  const msg = message.toLowerCase();
  if (
    msg.includes('digital restaurant') ||
    msg.includes('qr code system') ||
    msg.includes('restaurant project') ||
    (msg.includes('project') && msg.includes('restaurant'))
  ) {
    return (
      "Digital Restaurant QR Code System:\n\n" +
      "A digital menu and ordering system for restaurants using QR codes, streamlining order management and customer experience.\n\n" +
      "Tech Stack: React.js, Node.js, PostgreSQL, REST APIs, Supabase\n" +
      "Key Features:\n" +
      "- Developed QR code generation\n" +
      "- Integrated real-time order updates\n" +
      "- Ensured mobile responsiveness\n"
    );
  }
  if (
    msg.includes('betting platform') ||
    msg.includes('sports betting') ||
    msg.includes('apexbet') ||
    (msg.includes('project') && msg.includes('betting'))
  ) {
    return (
      "Betting Platform Web Application:\n\n" +
      "A robust web app for sports betting with live odds, user management, and transaction tracking.\n\n" +
      "Tech Stack: React.js, Node.js, PostgreSQL, REST APIs, Supabase\n" +
      "Key Features:\n" +
      "- Implemented secure payment flows\n" +
      "- Real-time odds updates\n" +
      "- Scalable backend architecture\n"
    );
  }
  if (
    msg.includes('financial dashboard') ||
    msg.includes('fintech dashboard') ||
    (msg.includes('project') && msg.includes('dashboard'))
  ) {
    return (
      "Financial Dashboard Web Application:\n\n" +
      "Built a production-level fintech dashboard inspired by platforms like PayPal and Stripe, demonstrating strong frontend engineering, UI/UX design, and scalable architecture skills.\n\n" +
      "Tech Stack: Next.js, TypeScript, Tailwind CSS, Recharts, Zustand, Mock API Layer\n" +
      "Key Features:\n" +
      "- Designed a scalable architecture\n" +
      "- Implemented interactive charts\n" +
      "- Managed state with Zustand for a seamless user experience\n"
    );
  }
  if (
    msg.includes('online marketplace') ||
    msg.includes('writers and students') ||
    msg.includes('edulink writers') ||
    (msg.includes('project') && msg.includes('marketplace'))
  ) {
    return (
      "Online Marketplace for Writers and Students:\n\n" +
      "A platform connecting writers and students for academic and creative projects, featuring secure payments and real-time messaging.\n\n" +
      "Tech Stack: Next.js, Node.js, PostgreSQL, REST APIs, Supabase\n" +
      "Key Features:\n" +
      "- Scalable user authentication\n" +
      "- Real-time data with Supabase\n" +
      "- Optimized for high concurrency\n"
    );
  }
  if (msg.includes('education') || msg.includes('degree') || msg.includes('university') || msg.includes('school'))
    return (
      "Education:\n\n" +
      "Bachelor of Science in Computer Science\n" +
      "University of Embu\n" +
      "- Almost graduating\n" +
      "- Active member of Tech Club"
    );
  if (msg.includes('hello') || msg.includes('hi'))
    return "Hello 👋 I'm Jamil’s AI assistant. Ask me about his skills, projects, experience, or background.";

  if (msg.includes('skills'))
    return "Jamil is a Full-Stack Developer specializing in Next.js, TypeScript, Supabase, Node.js, Firebase, system architecture, and scalable fintech platforms.";
  if (msg.includes('projects'))
    return (
      "Here are my main projects:\n\n" +
      "1. Online Marketplace for Writers and Students:\n" +
      "A platform connecting writers and students for academic and creative projects, featuring secure payments and real-time messaging.\n" +
      "Tech Stack: Next.js, Node.js, PostgreSQL, REST APIs, Supabase\n" +
      "Key Features: Scalable user authentication, real-time data with Supabase, optimized for high concurrency.\n\n" +
      "2. Financial Dashboard Web Application:\n" +
      "A production-level fintech dashboard inspired by PayPal and Stripe, with strong frontend engineering, UI/UX design, and scalable architecture.\n" +
      "Tech Stack: Next.js, TypeScript, Tailwind CSS, Recharts, Zustand, Mock API Layer\n" +
      "Key Features: Scalable architecture, interactive charts, state management with Zustand.\n\n" +
      "3. Betting Platform Web Application:\n" +
      "A robust web app for sports betting with live odds, user management, and transaction tracking.\n" +
      "Tech Stack: React.js, Node.js, PostgreSQL, REST APIs, Supabase\n" +
      "Key Features: Secure payment flows, real-time odds updates, scalable backend.\n\n" +
      "4. Digital Restaurant QR Code System:\n" +
      "A digital menu and ordering system for restaurants using QR codes, streamlining order management and customer experience.\n" +
      "Tech Stack: React.js, Node.js, PostgreSQL, REST APIs, Supabase\n" +
      "Key Features: QR code generation, real-time order updates, mobile responsiveness."
    );
  if (
    msg.includes('about') ||
    msg.includes('who are you') ||
    msg.includes('background') ||
    msg.includes('bio') ||
    msg.includes('who is barasa juma jamil') ||
    msg.includes("who's barasa juma jamil") ||
    msg.includes('who is jamil') ||
    msg.includes("who's jamil") ||
    /^who('?s| is)\b/.test(msg)
  )
    return (
      "I am a results-driven FULL-STACK WEB DEVELOPER with a passion for delivering innovative, high-quality solutions. With a proven track record of exceeding expectations, I thrive in dynamic environments and am committed to continuous learning and professional growth.\n\n" +
      "My career goal is to leverage my expertise to drive impactful change, collaborate with top-tier teams, and contribute to projects that make a real difference. Key achievements include:\n" +
      "- Led a team to deliver a mission-critical project 2 months ahead of schedule.\n" +
      "- Increased system efficiency by 35% through process optimization.\n" +
      "- Recognized for outstanding leadership and technical excellence."
    );
  if (msg.includes('experience'))
    return (
      "Jamil's Experience:\n\n" +
      "Tech Innovators Inc.:\n" +
      "- Collaborated with small companies on web and software development projects.\n" +
      "- Assisted in feature implementation, testing, debugging, and deployment.\n" +
      "- Worked within team environments using version control and structured workflows.\n\n" +
      "Creative Solutions Ltd.:\n" +
      "- Led UI redesign, improving user engagement by 40%.\n" +
      "- Implemented accessibility best practices across all products.\n" +
      "- Collaborated with cross-functional teams to deliver projects on time."
    );
  if (msg.includes('contact') || msg.includes('github') || msg.includes('linkedin'))
    return (
      "You can reach Jamil via LinkedIn or email in the contact section of this website.\n" +
      "GitHub: https://github.com/jamiljuma2\n" +
      "LinkedIn: https://www.linkedin.com/in/jamil-juma-5b5606343/"
    );
  if (msg.includes('cv') || msg.includes('resume'))
    return "You can download his CV from the Resume section down below.";
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
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl border-4 border-white/10 hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Open Chat"
          onClick={() => setOpen(true)}
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="drop-shadow-lg group-hover:scale-110 transition-transform">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/>
          </svg>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-0 flex items-end justify-end z-50 animate-fade-in">
          <div className="w-full max-w-md h-[80vh] m-4 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 shadow-2xl flex flex-col border border-blue-400/30 backdrop-blur-2xl glassmorphism">
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-700/60 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 rounded-t-3xl shadow-sm">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-xl text-blue-400 tracking-tight">Jamil Assistant</span>
                <span className="text-xs text-green-400 bg-green-900/70 px-2 py-1 rounded-full font-semibold shadow">Online</span>
              </div>
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close Chat"
                onClick={() => setOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 custom-scrollbar">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <div className="mb-4 text-base font-medium">Try a quick prompt:</div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {promptSuggestions.map(s => (
                      <button
                        key={s}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
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
                  <div className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-lg mb-1 transition-all duration-300 text-base leading-relaxed
                    ${msg.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-br-3xl'
                      : 'bg-white/10 text-blue-100 rounded-bl-3xl border border-blue-400/10'
                    } hover:scale-[1.02] active:scale-95`}
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <div className="font-medium whitespace-pre-line">{msg.text}</div>
                    <div className="text-xs text-gray-400 mt-2 text-right font-mono">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
              {/* Typing Indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-blue-200 px-5 py-3 rounded-2xl shadow-lg mb-1 flex items-center gap-2 border border-blue-400/10">
                    <span className="animate-bounce w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="animate-bounce w-2 h-2 bg-blue-300 rounded-full delay-75"></span>
                    <span className="animate-bounce w-2 h-2 bg-blue-200 rounded-full delay-150"></span>
                    <span className="text-xs text-gray-300 ml-2 font-mono">Assistant is typing...</span>
                  </div>
                </div>
              )}
              <div ref={msgEndRef} />
            </div>

            {/* Input Bar */}
            <div className="sticky bottom-0 px-5 py-4 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 rounded-b-3xl flex items-center glassmorphism border-t border-blue-400/10">
              <input
                type="text"
                className="flex-1 bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-2xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium text-base transition-all shadow-inner"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                autoFocus
              />
              <button
                className="ml-3 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full p-3 shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar & Glassmorphism Styles */}
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #60a5fa #111827;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          background: #111827;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border-radius: 4px;
        }
        .glassmorphism {
          background: rgba(30, 41, 59, 0.85);
          box-shadow: 0 8px 32px rgba(59,130,246,0.18);
          backdrop-filter: blur(16px);
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
import React from 'react';

const ChatBubble = ({ sender, text, timestamp }) => {
  const isBot = sender === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} w-full`}>
      <div className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md ${isBot ? 'bg-white/80 text-black' : 'bg-purple-600 text-white'} mb-1`}
        style={{ backdropFilter: 'blur(8px)' }}>
        <div className="flex items-center gap-2">
          {isBot && <img src="/avatar.png" alt="Bot" className="w-6 h-6 rounded-full mr-2" />}
          <span>{text}</span>
        </div>
        <div className="text-xs text-gray-500 mt-1 text-right">{timestamp}</div>
      </div>
    </div>
  );
};

export default ChatBubble;

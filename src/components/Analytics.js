import React from 'react';

const Analytics = ({ stats }) => {
  return (
    <div className="bg-white/80 rounded-2xl shadow-lg p-4 mt-4">
      <h3 className="text-lg font-bold text-purple-700 mb-2">Chatbot Analytics</h3>
      <div className="space-y-1">
        <div>Most Asked: <span className="font-semibold">{stats.mostAsked}</span></div>
        <div>Visitor Count: <span className="font-semibold">{stats.visitorCount}</span></div>
        <div>Chat Satisfaction: <span className="font-semibold">{stats.satisfaction}</span></div>
      </div>
    </div>
  );
};

export default Analytics;

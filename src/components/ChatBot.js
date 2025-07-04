import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your AI assistant. Ask me anything about this portfolio, coding, or tech!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);

    const apiUrl = 'http://localhost:5000/api/chat'; // or your deployed backend URL

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: "You are a helpful AI assistant for a developer's portfolio website." },
            ...messages.map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            { role: 'user', content: input }
          ]
        }),
      });
      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
      setMessages((msgs) => [...msgs, { sender: 'bot', text: botReply }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: "Sorry, there was an error connecting to the AI." }]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">💬 AI ChatBot</div>
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chatbot-message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
        {loading && <div className="chatbot-message bot">Thinking...</div>}
      </div>
      <form className="chatbot-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
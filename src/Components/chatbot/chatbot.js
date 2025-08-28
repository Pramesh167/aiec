import React, { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User, ChevronDown } from "lucide-react";
import "./chatbot.css";

import { botGreeting, botResponses, quickReplies } from "./components/chatData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setTimeout(() => addBotMessage(botGreeting), 300);
    }
  };

  const addBotMessage = (text, options) => {
    setIsBotTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text, options }]);
      setIsBotTyping(false);
      setShowQuickReplies(true);
    }, 1000 + Math.random() * 500); // Add slight variability to typing time
  };

  const handleQuickReply = (option) => {
    setMessages((prev) => [...prev, { from: "user", text: option }]);
    setShowQuickReplies(false);
    
    if (botResponses[option]) {
      addBotMessage(botResponses[option]);
    } else {
      addBotMessage("I'm here to assist you with anything about AIEC. How can I help you today?");
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    
    setMessages((prev) => [...prev, { from: "user", text: inputText }]);
    setInputText("");
    setShowQuickReplies(false);
    
    // Simple response logic - in a real app, you'd integrate with an API
    const userMessage = inputText.toLowerCase();
    let response = "I'm here to assist you with anything about AIEC. Could you please provide more details?";
    
    // Check for keywords in the user's message
    Object.keys(botResponses).forEach(key => {
      if (userMessage.includes(key.toLowerCase())) {
        response = botResponses[key];
      }
    });
    
    addBotMessage(response);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isBotTyping]);

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chatbot-toggle-btn" onClick={toggleChat}>
          <Bot size={24} />
          <span>AIEC Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={20} />
              <span>AIEC Virtual Assistant</span>
            </div>
            <button onClick={toggleChat} className="close-btn">
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-body" ref={scrollRef}>
            <div className="chat-welcome">
              <p>Hello! I'm your AIEC assistant. How can I help you today?</p>
            </div>
            
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.from === "bot" ? "bot" : "user"}`}
              >
                <div className="message-avatar">
                  {msg.from === "bot" ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className="message-content">
                  {msg.text}
                  {msg.options && (
                    <div className="message-options">
                      {msg.options.map((option, i) => (
                        <button key={i} className="option-btn">
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isBotTyping && (
              <div className="chat-message bot">
                <div className="message-avatar">
                  <Bot size={16} />
                </div>
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {showQuickReplies && (
            <div className="quick-replies">
              <div className="quick-replies-header">
                <span>Quick options</span>
                <ChevronDown size={16} />
              </div>
              <div className="quick-replies-container">
                {quickReplies.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleQuickReply(option)}
                    className="quick-reply-btn"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message here..."
            />
            <button type="submit" disabled={inputText.trim() === ""}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
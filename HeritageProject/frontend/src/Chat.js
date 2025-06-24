import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I assist you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: "user",
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: inputMessage,
      });

      const botResponse = {
        text: response.data.reply || "Sorry, I didn't understand that.",
        sender: "bot",
        time: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Server error. Try again later.",
          sender: "bot",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        <div className="message-list">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}-message`}>
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="message-time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="message-input-area" onSubmit={sendMessage}>
        <input
          type="text"
          className="form-control message-input"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleMessageChange}
        />
        <button type="submit" className="btn send-button ">
          {/* <i className="bi bi-send">Send</i> */}
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

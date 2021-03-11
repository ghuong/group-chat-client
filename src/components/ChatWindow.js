import React, { useState } from "react";

// import "./ChatWindow.css";
import useChat from "../utils/useChat";

const ChatWindow = () => {
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  // update "newMessage" state as the user types their message
  const handleNewMessageChange = (event) => setNewMessage(event.target.value);

  // form submission handler to send the user's message
  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat_window">
      <ol id="messages" className="messages">
        {messages.map((message, i) => (
          <li
            key={i /* TODO: idx as key = anti-pattern */}
          >
            {message.body}
          </li>
        ))}
      </ol>
      <div className="bottom_wrapper clearfix">
        <i id="typing"></i>
        <form id="form" onSubmit={handleSendMessage}>
          <div className="message_input_wrapper">
            <input
              type="text"
              id="message"
              className="message_input"
              placeholder="Type here..."
              value={newMessage}
              onChange={handleNewMessageChange}
            />
          </div>
          <button className="send_message">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;

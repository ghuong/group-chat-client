import React, { useState } from "react";

// CSS
import "./css/ChatWindow.css";

import useChat from "../utils/useChat";

import MessagesPanel from "./MessagesPanel";
import NewMessageForm from "./NewMessageForm";

const ChatWindow = () => {
  const { messages, sendMessage } = useChat(); // custom hook
  const [newMessage, setNewMessage] = useState("");

  // as user types their message, this updates "newMessage" state
  const handleNewMessageChange = (event) => setNewMessage(event.target.value);

  // on form submit, this sends the user's message
  const handleSendMessage = (event) => {
    event.preventDefault(); // prevent default form submission (page refresh)
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat_window">
      <MessagesPanel messages={messages} className="messages_panel" />
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleSendMessage={handleSendMessage}
        className="new_message_form"
      />
    </div>
  );
};

export default ChatWindow;

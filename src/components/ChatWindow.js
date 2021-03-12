import React, { useState } from "react";

// CSS
import styles from "./css/ChatWindow.module.css";

// Custom Hook
import useChat from "../utils/useChat";

// Child Components
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
    <div className={styles.chat_window}>
      <MessagesPanel messages={messages} className={styles.messages_panel} />
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleSendMessage={handleSendMessage}
        className={styles.new_message_form}
      />
    </div>
  );
};

export default ChatWindow;

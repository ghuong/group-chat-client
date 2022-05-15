import React, { useState } from "react";

// CSS
import css from "./css/ChatRoom.module.css";

// Custom Hook
import useChat from "../utils/useChat";

// Child Components
import MessagesPanel from "./MessagesPanel";
import UsersPanel from "./UsersPanel";
import NewMessageForm from "./NewMessageForm";

const ChatRoom = (props) => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { username } = props.location.state; // Get username state passed from react-router

  const { messages, sendMessage, users } = useChat(roomId, username); // custom hook
  const [newMessage, setNewMessage] = useState(""); // new message to be sent

  // as user types their message, this updates "newMessage" state
  const handleNewMessageChange = (event) => setNewMessage(event.target.value);

  // on form submit, this sends the user's message
  const handleSendMessage = (event) => {
    event.preventDefault(); // prevent default form submission (page refresh)
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className={css.chat_window}>
      {/* <h1>Room: {roomId}</h1> */}
      <UsersPanel users={users} currentUsername={username} className={css.users_panel} />
      <MessagesPanel messages={messages} className={css.messages_panel} />
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleSendMessage={handleSendMessage}
        className={css.new_message_form}
      />
    </div>
  );
};

export default ChatRoom;

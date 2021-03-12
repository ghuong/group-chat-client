import React, { useEffect, useRef } from "react";

import styles from "./css/MessagesPanel.module.css";

const MessagesPanel = ({ messages, className }) => {
  const bottomOfMessagesRef = useRef(null); // bottom of messages

  useEffect(() => {
    // scroll down to latest message when received
    bottomOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`${styles.messages_panel} ${className}`}>
      <ol id="messages" className="messages">
        {messages.map((message, i) => (
          <li key={i /* TODO: idx as key = anti-pattern */}>{message.body}</li>
        ))}
      </ol>
      <div ref={bottomOfMessagesRef} />
    </div>
  );
};

export default MessagesPanel;

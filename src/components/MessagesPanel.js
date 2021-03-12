import React from "react";

// import styles from "./css/MessagesPanel.module.css"

const MessagesPanel = ({ messages, className }) => {  
  return (
    <div className={`${className}`}>
      <ol id="messages" className="messages">
        {messages.map((message, i) => (
          <li key={i /* TODO: idx as key = anti-pattern */}>{message.body}</li>
        ))}
      </ol>
    </div>
  );
}

export default MessagesPanel
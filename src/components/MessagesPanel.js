import React, { useEffect, useRef } from "react";

import styles from "./css/MessagesPanel.module.css";

const MessagesPanel = ({ messages, className }) => {
  const latestRef = useRef(null); // ref to latest message

  useEffect(() => {
    if (latestRef.current) {
      // scroll down to latest message when received
      latestRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Returns html elements for a list of messages
  const listOfMessages = (messages) => {
    return messages.map((message, i) => {
      // To scroll to the top of latest message instead
      const ref = null; // i === messages.length - 1 ? latestRef : null;
      return (
        <li key={i} ref={ref}>
          {message.body}
        </li>
      );
    });
  };

  return (
    <div className={`${styles.messages_panel} ${className}`}>
      <ol className={styles.messages_list}>{listOfMessages(messages)}</ol>
      <div ref={latestRef} />
      {/* <div className={styles.space_under_messages}></div> */}
    </div>
  );
};

export default MessagesPanel;

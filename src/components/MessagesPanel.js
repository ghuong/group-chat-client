import React, { useEffect, useRef } from "react";

import ScrollBox from "./ScrollBox";

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
      const itemClass = message.ownedByCurrentUser
        ? styles.my_message
        : styles.other_message;
      return (
        <li key={i} ref={ref} className={itemClass}>
          {message.username} | {message.body}
        </li>
      );
    });
  };

  return (
    <div className={`${styles.messages_panel} ${className}`}>
      <ScrollBox bgColor="#f8f8f8">
        <ol className={styles.messages_list}>{listOfMessages(messages)}</ol>
        <div ref={latestRef} />
        {/* <div className={styles.space_under_messages}></div> */}
      </ScrollBox>
    </div>
  );
};

export default MessagesPanel;

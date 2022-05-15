import React, { useEffect, useRef } from "react";

import ScrollBox from "./ScrollBox";

import css from "./css/MessagesPanel.module.css";

/**
 * Display list of messages
 * @param {Array} messages messages
 * @param {String} className css className
 */
const MessagesPanel = ({ messages, className }) => {
  const latestRef = useRef(null); // reference to bottom of last message

  useEffect(() => {
    if (latestRef.current) {
      // scroll down to latest message when received
      latestRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // run effect whenever `messages` changes

  // Returns html elements for a list of messages
  const listOfMessages = (messages) => {
    return messages.map((message, i) => {
      //// Obsolete: To scroll to the top of latest message
      //// const ref = i === messages.length - 1 ? latestRef : null;
      //// add ref={ref} to 'li' element
      const cssClass = message.ownedByCurrentUser
        ? css.my_message
        : css.other_message;
      return (
        <li key={i} className={cssClass}>
          <b>{message.username}</b> : {message.body}
        </li>
      );
    });
  };

  return (
    <div className={`${css.messages_panel} ${className}`}>
      <ScrollBox bgColor="#f8f8f8">
        <ol className={css.messages_list}>{listOfMessages(messages)}</ol>
        <div ref={latestRef} />
        {/* <div className={styles.space_under_messages}></div> */}
      </ScrollBox>
    </div>
  );
};

export default MessagesPanel;

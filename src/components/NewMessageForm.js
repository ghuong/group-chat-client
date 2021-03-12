import React, { useRef, useEffect } from "react";

import { useStartTyping } from "react-use";

// Bootstrap CSS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./css/NewMessageForm.module.css";

const NewMessageForm = ({
  newMessage,
  handleSendMessage,
  handleNewMessageChange,
  className,
}) => {
  const messageRef = useRef(null); // reference to a component

  // Auto-focus message input on render
  useEffect(() => messageRef.current.focus(), []);

  useStartTyping(() => messageRef.current.focus());

  return (
    <div className={className}>
      <Form onSubmit={handleSendMessage} autocomplete="off" inline>
        <Form.Label srOnly>Type Your Message</Form.Label>
        <Form.Control
          id="message"
          className={`${styles.new_message_input}`}
          placeholder="> Type your message..."
          value={newMessage}
          onChange={handleNewMessageChange}
          ref={messageRef}
          autoFocus
        />
        <Button
          variant="secondary"
          className={`${styles.btn_send_message}`}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default NewMessageForm;

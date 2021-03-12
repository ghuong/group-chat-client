import React from "react";

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
  return (
    <div className={className}>
      <Form
        onSubmit={handleSendMessage}
        inline
      >
        <Form.Label srOnly>
          Type Your Message
        </Form.Label>
        <Form.Control
          id="message"
          className={`${styles.new_message_input}`}
          placeholder="> Type your message..."
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <Button variant="primary" className={`${styles.btn_send_message}`}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default NewMessageForm;

import React from "react";

// Bootstrap CSS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import styles from "./css/NewMessageForm.module.css";

const NewMessageForm = ({
  newMessage,
  handleSendMessage,
  handleNewMessageChange,
  className,
}) => {
  return (
    <Form onSubmit={handleSendMessage} className={className} inline>
      <Form.Label controlId="formNewMessage" srOnly>
        Type Your Message
      </Form.Label>
      <Form.Control
        id="message"
        className="message_input"
        placeholder="Type here..."
        value={newMessage}
        onChange={handleNewMessageChange}
      />
      <Button className="send_message">Send</Button>
    </Form>
  );
};

export default NewMessageForm;

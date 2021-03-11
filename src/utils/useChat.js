import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

// TODO: extract to a config file
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // name of the event
const SOCKET_SERVER_URL = "http://localhost:4001";

/**
 * Custom useChat hook
 * Creates a connection to server with socket.io-client
 * @returns Exposes an object containing:
 *  - messages: an array of received and sent messages
 *  - sendMessage: function that emits an event with a new message to server
 */
const useChat = () => {
  const [messages, setMessages] = useState([]); // sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    // Create WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    // Listen for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = { ...message };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroy socket reference when connection closes
    return () => socketRef.current.disconnect();
  }, []);

  /**
   * Sends a message to server that forwards to all other users
   */
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      // senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;

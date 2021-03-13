import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import config from "./config";

/**
 * Custom useChat hook
 * Creates a connection to server with socket.io-client
 * @returns Exposes an object containing:
 *  - messages: an array of received and sent messages
 *  - sendMessage: function that emits an event with a new message to server
 */
const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    // Create WebSocket connection
    socketRef.current = socketIOClient(config.SOCKET_SERVER_URL, {
      query: { roomId },
    });

    // Listen for incoming messages
    socketRef.current.on(config.NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = { 
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroy socket reference when connection closes
    return () => socketRef.current.disconnect();
  }, [roomId]);

  /**
   * Sends a message to server that forwards to all other users
   */
  const sendMessage = (messageBody) => {
    socketRef.current.emit(config.NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;

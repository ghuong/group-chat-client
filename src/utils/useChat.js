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
const useChat = (roomId, username) => {
  const [messages, setMessages] = useState([]); // sent and received messages
  const [users, setUsers] = useState([]); // users connected to room
  const socketRef = useRef();

  useEffect(() => {
    // Establish socket connection with Socket.io server
    socketRef.current = socketIOClient(config.SOCKET_SERVER_URL, {
      query: { roomId, username },
      secure: true,
    });

    // Listen for incoming messages
    socketRef.current.on(config.NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]); //? arrow necessary?
    });

    // Listen for new users connecting to room
    socketRef.current.on(config.USER_CONNECTED_EVENT, (newUser) => {
      setUsers((users) => [...users, newUser]);
      if (newUser.id !== socketRef.current.id) {
        // Announce our presence to the new user to let them know we're in the room with them
        // (so they can add us to their users list)
        socketRef.current.emit(config.ANNOUNCE_PRESENCE_EVENT, {
          recipientUser: newUser,
        });
      }
    });

    // Listen for users disconnecting from room
    socketRef.current.on(config.USER_DISCONNECTED_EVENT, (removedUser) => {
      setUsers((users) => [...users.filter((user) => user.id !== removedUser.id)]);
    });

    // Upon joining room, listen for the other users (already in room)
    // announcing their presence to us (so that we can update our users list)
    socketRef.current.on(config.ANNOUNCE_PRESENCE_EVENT, (otherUserInRoom) => {
      setUsers((users) => [...users, otherUserInRoom]);
    });

    // Return cleanup function: Disconnect from socket
    return () => socketRef.current.disconnect();
  }, [roomId, username]); // Run only once! (or when roomId or username change, which is never)

  /**
   * Sends a message to server that forwards to all other users
   */
  const sendMessage = (messageBody) => {
    socketRef.current.emit(config.NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      username,
    });
  };

  // const getCurrentUser = () => ({
  //   name: username,
  //   id: socketRef.current.id,
  // });

  return { messages, sendMessage, users };
};

export default useChat;

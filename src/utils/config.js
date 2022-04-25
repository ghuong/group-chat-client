/**
 * SocketIO Server
 */
const PORT = process.env.PORT || 4001;
const SOCKET_SERVER_URL = `http://localhost:${PORT}`;

/**
 * SocketIO event names
 */
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";


const config = {
  NEW_CHAT_MESSAGE_EVENT,
  SOCKET_SERVER_URL,
};

export default config;
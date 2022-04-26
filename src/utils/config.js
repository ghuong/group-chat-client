/**
 * SocketIO Server
 */
let SOCKET_SERVER_URL = "http://localhost:4001";

if (process.env.NODE_ENV === "production") {
  SOCKET_SERVER_URL = `https://group-chat-gary.herokuapp.com:${process.env.PORT}`;
}

/**
 * SocketIO event names
 */
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";


const config = {
  NEW_CHAT_MESSAGE_EVENT,
  SOCKET_SERVER_URL,
};

export default config;
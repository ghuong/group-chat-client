/**
 * SocketIO Server
 */
const SOCKET_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? window.location.hostname
    : "http://localhost:4001";

/**
 * SocketIO event names
 */
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const USER_CONNECTED_EVENT = "userConnected";
const USER_DISCONNECTED_EVENT = "userDisconnected";
const ANNOUNCE_PRESENCE_EVENT = "announcePresence";

const config = {
  NEW_CHAT_MESSAGE_EVENT,
  USER_CONNECTED_EVENT,
  USER_DISCONNECTED_EVENT,
  SOCKET_SERVER_URL,
  ANNOUNCE_PRESENCE_EVENT,
};

export default config;
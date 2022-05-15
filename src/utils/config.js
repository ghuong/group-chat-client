/**
 * SocketIO Server
 */
const SOCKET_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? window.location.hostname // since the React client is being served on the same machine as (and by) the server
    : "http://localhost:4001"; // in development mode, server listens on this port

/**
 * SocketIO event names
 */
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const USER_CONNECTED_EVENT = "userConnected";
const USER_DISCONNECTED_EVENT = "userDisconnected";
const ANNOUNCE_PRESENCE_EVENT = "announcePresence";

// Expose configuration constants
const config = {
  NEW_CHAT_MESSAGE_EVENT,
  USER_CONNECTED_EVENT,
  USER_DISCONNECTED_EVENT,
  ANNOUNCE_PRESENCE_EVENT,
  SOCKET_SERVER_URL,
};

export default config;
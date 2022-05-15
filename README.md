# Group Chat Client

Live at [group-chat-gary.herokuapp.com](https://group-chat-gary.herokuapp.com)

![screenshot](https://live.staticflickr.com/65535/52065497752_0a91096f8b_z.jpg)

## About

This is the React web client for a real-time group chat app. There is a corresponding [Node.js (Express) server](https://github.com/ghuong/group-chat-server), which exposes a [Socket.io](https://socket.io/) server, allowing clients to keep open a two-way socket connection through which they can broadcast messages to one another in real-time.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, run `npm install` to install package dependencies. 

Run `npm start` to run the app in development mode. View in browser at [http://localhost:3000](http://localhost:3000).

Run `npm run build` to build the app for production to the `build/` folder.

## `useChat` custom hook

This is where most of the Socket.io magic happens (at least on the client end). 

It declares some state variables for:

1. chat `messages`
2. `users` in the same chatroom
3. and a `socketRef` (reference to the socket connection).

It will `useEffect` to:

1. establish a socket connection with the Socket.io server (on the Node.js server)
2. register some listeners for events: new messages, users joining or leaving the room, etc. - the event handlers will update the corresponding state variables
3. return a cleanup function which simply disconnects from the socket

Finally, `useChat` will return an object containing the aforementioned state variables (`messages` and `users`), plus a `sendMessage` function, which emits a new chat message to the Socket.io server.

See `socketcheatsheet.js` for examples of the different ways of emitting events.

## Components

- `App`: uses `react-router` to render either `Home` page, or `ChatRoom`
- `ChatRoom`: Displays `messages` in a `MessagesPanel`, `users` in the room with a `UsersPanel`, and a `NewMessageForm`.
- `MessagesPanel`: wraps the `messages` in a `ScrollBox`, and keeps a reference to an empty `<div>` at the bottom of the last message to automatically scroll down to the bottom whenever a new message is received
- `ScrollBox`: Adds a subtle fade effect at the top and bottom edges, and enables css property `overflow: scroll`.

## Deployment in Production

This React app is currently intended to be deployed as static assets by the Express server, see [server documentation](https://github.com/ghuong/group-chat-server). Thus, the Socket.io server is located on the same machine as the client.

To deploy the React app separately from the server, update the `SOCKET_SERVER_URL` in `src/utils/config.js`.

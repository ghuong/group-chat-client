import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

const ClientComponent = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });

    // CLEAN UP EFFECT
    return () => socket.disconnect();
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
};

export default ClientComponent;

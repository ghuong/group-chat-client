import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";

const App = () => {
  const [shouldLoadClient, setShouldLoadClient] = useState(true);

  return (
    <>
      {/* LOAD OR UNLOAD CLIENT
      <button onClick={() => setShouldLoadClient((prevState) => !prevState)}>
        {shouldLoadClient ? "STOP CLIENT" : "START CLIENT"}
      </button> */}
      {/* SOCKET IO CLIENT */}
      {shouldLoadClient ? <ChatWindow /> : null}
    </>
  );
};

export default App;

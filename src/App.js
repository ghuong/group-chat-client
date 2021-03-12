import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";

import styles from "./App.module.css";

const App = () => {
  const [shouldLoadClient, setShouldLoadClient] = useState(true);

  return (
    <div className={styles.container}>
      {/* LOAD OR UNLOAD CLIENT
      <button onClick={() => setShouldLoadClient((prevState) => !prevState)}>
        {shouldLoadClient ? "STOP CLIENT" : "START CLIENT"}
      </button> */}
      {/* SOCKET IO CLIENT */}
      {shouldLoadClient ? <ChatWindow /> : null}
    </div>
  );
};

export default App;

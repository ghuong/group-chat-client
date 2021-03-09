import React, { useState } from "react";
import ClientComponent from "./components/ClientComponent";

const App = () => {
  const [shouldLoadClient, setShouldLoadClient] = useState(true);

  return (
    <>
      {/* LOAD OR UNLOAD CLIENT */}
      <button onClick={() => setShouldLoadClient((prevState) => !prevState)}>
        {shouldLoadClient ? "STOP CLIENT" : "START CLIENT"}
      </button>
      {/* SOCKET IO CLIENT */}
      {shouldLoadClient ? <ClientComponent /> : null}
    </>
  );
};

export default App;

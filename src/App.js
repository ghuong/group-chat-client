import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import ChatRoom from "./components/ChatRoom";

const App = () => {
  // const [shouldLoadClient, setShouldLoadClient] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:roomId" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

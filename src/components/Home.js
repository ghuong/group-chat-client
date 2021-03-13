import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./css/Home.module.css";

const Home = () => {
  const [roomName, setRoomName] = useState("");
  // update roomName as user types it in
  const handleRoomNameChange = (event) => setRoomName(event.target.value);

  return (
    <div className={styles.home_container}>
      <Form autoComplete="off" inline>
        <Form.Label srOnly>Room Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <Button variant="primary">
          <Link to={`/${roomName}`}>Join</Link>
        </Button>
      </Form>
    </div>
  );
}

export default Home

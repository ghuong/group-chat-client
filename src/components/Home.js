import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./css/Home.module.css";

const Home = () => {
  const defaultRoomSelection = "General";
  const [roomName, setRoomName] = useState(defaultRoomSelection);
  const [username, setUsername] = useState("");
  // update roomName as user types it in
  const handleRoomNameChange = (event) => setRoomName(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);

  return (
    <div className={styles.home_container}>
      <Form autoComplete="off" inline>
        <Form.Label srOnly>Room Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Form.Control
          as="select"
          aria-label="room"
          onChange={handleRoomNameChange}
        >
          <option value={defaultRoomSelection}>{defaultRoomSelection}</option>
          <option value="Programming">Programming</option>
        </Form.Control>
        <Button variant="primary">
          <Link
            to={{
              pathname: `/${roomName}`,
              state: { username },
            }}
          >
            Join
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default Home

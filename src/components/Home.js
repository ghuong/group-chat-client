import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./css/Home.module.css";

const Home = () => {
  const defaultRoomSelection = "general";
  const [roomName, setRoomName] = useState(defaultRoomSelection);
  const [username, setUsername] = useState("");
  // update roomName as user types it in
  const handleRoomNameChange = (event) => setRoomName(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);

  return (
    <div className={styles.home_container}>
      <Form autoComplete="off" className={styles.form} inline>
        <Form.Label srOnly>Room Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className={styles.form_control}
        />
        <Form.Control
          as="select"
          aria-label="room"
          onChange={handleRoomNameChange}
          className={styles.form_control}
        >
          <option value={defaultRoomSelection}>General Chat</option>
          <option value="Programming">Programming</option>
        </Form.Control>

        <Link
          to={{
            pathname: `/${roomName}`,
            state: { username },
          }}
          className={styles.form_control}
        >
          <Button variant="primary" className={styles.submit_button}>
            Join
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Home

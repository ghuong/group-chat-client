import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import css from "./css/Home.module.css";

const Home = () => {
  const defaultRoomSelection = "general";
  const [roomName, setRoomName] = useState(defaultRoomSelection);
  const [username, setUsername] = useState("");
  // update roomName as user types it in
  const handleRoomNameChange = (event) => setRoomName(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);

  return (
    <div className={css.home_container}>
      <Form autoComplete="off" className={css.form} inline>
        <Form.Label srOnly>Room Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className={css.form_control}
        />
        <Form.Control
          as="select"
          aria-label="room"
          onChange={handleRoomNameChange}
          className={css.form_control}
        >
          <option value={defaultRoomSelection}>General Chat</option>
          <option value="Programming">Programming</option>
        </Form.Control>

        <Link
          to={{
            pathname: `/${roomName}`,
            state: { username },
          }}
          className={css.form_control}
        >
          <Button variant="primary" className={css.submit_button}>
            Join
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Home

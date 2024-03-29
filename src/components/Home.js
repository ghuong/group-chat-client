import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import css from "./css/Home.module.css";

const Home = () => {
  const defaultRoomSelection = "general";
  const [roomName, setRoomName] = useState(defaultRoomSelection);
  const [username, setUsername] = useState("");
  const nameInputRef = useRef(null);
  const navigate = useNavigate();

  // update username as user types it in
  const handleUsernameChange = (event) => setUsername(event.target.value);
  // update roomName as selects one
  const handleRoomNameChange = (event) => setRoomName(event.target.value);

  // Auto-focus Name form input on first render
  useEffect(() => nameInputRef.current.focus(), []);

  // const getChatRoomLink = () => ({
  //   pathname: `/rooms/${roomName}`,
  //   state: { username },
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`navigating to /rooms/${roomName}`);

    navigate(`/rooms/${roomName}`, { state: { username } });
  };

  return (
    <div className={css.home_container}>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={css.form}
        inline
      >
        <Form.Label srOnly>Room Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={username}
          onChange={handleUsernameChange}
          ref={nameInputRef}
          className={css.form_control}
        />
        <Form.Control
          as="select"
          aria-label="room"
          onChange={handleRoomNameChange}
          className={css.form_control}
        >
          <option value={defaultRoomSelection}>General Chat</option>
          <option value="breakout1">Breakout Room 1</option>
          <option value="breakout2">Breakout Room 2</option>
          <option value="breakout3">Breakout Room 3</option>
        </Form.Control>

        <Button variant="primary" type="submit" className={css.submit_button}>
          Join
        </Button>
      </Form>
    </div>
  );
};

export default Home;

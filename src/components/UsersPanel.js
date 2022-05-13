import css from "./css/UsersPanel.module.css";

const UsersPanel = ({ users, className, currentUser }) => {
  const listOfUsers = (users) => {
    return users.map((user) => {
      const userDisplay = user === currentUser ? <b>{user}</b> : user;
      return <li key={user}>{userDisplay}</li>;
    });
  };

  return (
    <div className={`${css.users_panel} ${className}`}>
      <h5>Users:</h5>
      <ol className={css.users_list}>{listOfUsers(users)}</ol>
    </div>
  );
};

export default UsersPanel;

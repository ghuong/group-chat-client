import css from "./css/UsersPanel.module.css";

/**
 * Displays a list of Users in the same chatroom
 * @param {Array} users list of users
 * @param {String} className css className
 * @param {String} currentUser our username
 */
const UsersPanel = ({ users, className, currentUsername }) => {
  const listOfUsers = (users) => {
    return users.map((user) => {
      const userDisplay =
        user.name === currentUsername ? <b>{user.name}</b> : user.name;
      return <li key={user.id}>{userDisplay}</li>;
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

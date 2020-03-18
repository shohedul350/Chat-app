const users = [];

const addUser = ({ id, name, room }) => {
  const existringUser = users.find((user) => user.name === name.trim()
    .toLowerCase() && user.room === room.trim().toLowerCase());


  if (existringUser) {
    return { error: 'Username is take' };
  }
  const user = { id, name, room };
  users.push(user);
  return { user };
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return 0;
};
const getUser = (id) => users.find((user) => user.id === id);
const getUserInroom = (room) => users.filter((user) => user.room === room);
module.exports = {
  addUser, removeUser, getUser, getUserInroom,
};

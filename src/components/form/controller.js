const store = require("./store");

const getUsers = () => {
  return new Promise((res, rej) => {
    return res(store.getUsers());
  });
};

const addUser = (name, lastName, email, message) => {
  return new Promise((res, rej) => {
    if (!name || !lastName || !email || !message) {
      return rej("[Controller - Add]");
    }
    const user = {
      name,
      lastName,
      email,
      message,
    };
    return res(store.addUser(user));
  });
};

module.exports = {
  getUsers,
  addUser,
};

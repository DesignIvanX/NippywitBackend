const store = require("./store");

const getUsers = () => {
  return new Promise((res, rej) => {
    return res(store.getUsers());
  });
};

const addUser = (email) => {
  return new Promise((res, rej) => {
    if (!email) {
      return rej("[Controller - Add]");
    }
    const user = {
      email,
    };
    return res(store.addUser(user));
  });
};

module.exports = {
  getUsers,
  addUser,
};

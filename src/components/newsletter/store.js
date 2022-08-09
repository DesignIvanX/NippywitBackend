const modelSchema = require("./modelSchema");

const getUsers = () => {
  return modelSchema.find();
};

const addUser = (user) => {
  const myUser = new modelSchema(user);
  return myUser.save();
};

module.exports = {
  getUsers,
  addUser,
};

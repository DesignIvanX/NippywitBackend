const newsletter = require("../components/newsletter/network");
const form = require("../components/form/network");

const router = (server) => {
  server.use("/api/newsletter/", newsletter);
  server.use("/api/form/", form);
};

module.exports = router;

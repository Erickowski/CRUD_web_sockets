require("dotenv").config();

const { ServerModel } = require("./models/server");

const server = new ServerModel();

server.execute();

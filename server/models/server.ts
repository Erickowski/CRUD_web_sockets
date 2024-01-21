const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const cors = require("cors");

const { Sockets } = require("./socket");

export class ServerModel {
  app: any;
  port: string;
  server: any;
  io: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
  }

  middlewares() {
    this.app.get("/", (_, res) => {
      res.sendFile(path.resolve(__dirname, "../public/index.html"));
    });

    this.app.use(cors());
  }

  configureSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();

    this.configureSockets();

    this.server.listen(this.port, () => {
      console.log("listening on *:", this.port);
    });
  }
}

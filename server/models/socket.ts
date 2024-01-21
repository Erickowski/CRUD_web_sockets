const { BandList, BandListI } = require("./band-list");

export class Sockets {
  io: any;
  bandList: typeof BandListI;

  constructor(io) {
    this.io = io;
    this.bandList = new BandList();

    this.socketEvent();
  }

  socketEvent() {
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");

      socket.emit("current-bands", this.bandList.getBands());
    });
  }
}

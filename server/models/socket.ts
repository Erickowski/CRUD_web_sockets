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

      socket.on("vote-band", (id: string) => {
        this.bandList.increaseVote(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      socket.on("delete-band", (id: string) => {
        this.bandList.removeBand(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      socket.on(
        "change-band-name",
        ({ id, name }: { id: string; name: string }) => {
          this.bandList.changeBandName(id, name);
          this.io.emit("current-bands", this.bandList.getBands());
        }
      );

      socket.on("add-band", (name: string) => {
        this.bandList.addBand(name);
        this.io.emit("current-bands", this.bandList.getBands());
      });
    });
  }
}

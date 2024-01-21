const { v4: uuidV4 } = require("uuid");

export interface BandI {
  id: string;
  name: string;
  votes: number;
}

export class Band implements BandI {
  id: string;
  name: string;
  votes: number;

  constructor(name: string) {
    this.id = uuidV4();
    this.name = name;
    this.votes = 0;
  }
}

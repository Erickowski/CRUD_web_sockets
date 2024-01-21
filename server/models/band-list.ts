import { Band, BandI } from "./band";

export interface BandListI {
  bands: BandI[];
  addBand: (name: string) => void;
  removeBand: (id: string) => void;
  getBands: () => void;
  increaseVote: (id: string) => void;
  changeBandName: (id: string, name: string) => void;
}

export class BandList implements BandListI {
  bands: BandI[];

  constructor() {
    this.bands = [
      new Band("Linkin Park"),
      new Band("Nirvana"),
      new Band("Soda Stereo"),
    ];
  }

  addBand(name: string) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  removeBand(id: string) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increaseVote(id: string) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes++;
      }
      return band;
    });
  }

  changeBandName(id: string, name: string) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = name;
      }
      return band;
    });
  }
}

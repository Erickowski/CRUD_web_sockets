import { ChangeEvent, FormEvent, useState } from "react";

import { Input } from "..";

interface IAddBand {
  onAddBand: (name: string) => void;
}

export function AddBand({ onAddBand }: IAddBand) {
  const [bandName, setBandName] = useState("");

  const handleBandNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBandName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (bandName.trim().length) {
      onAddBand(bandName);
      setBandName("");
    }
  };

  return (
    <div>
      <h3 className="mb-2">Añadir banda</h3>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Nuevo nombre de la banda"
          value={bandName}
          onChange={handleBandNameChange}
        />
      </form>
    </div>
  );
}

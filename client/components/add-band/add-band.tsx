import { ChangeEvent, FormEvent, useContext, useState } from "react";

import { SocketContext } from "@/context";

import { Input } from "..";

export function AddBand() {
  const [bandName, setBandName] = useState("");
  const { socket } = useContext(SocketContext);

  const handleBandNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBandName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (bandName.trim().length) {
      socket.emit("add-band", bandName);
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

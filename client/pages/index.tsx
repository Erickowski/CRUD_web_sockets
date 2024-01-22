import { useEffect, useState } from "react";

import Head from "next/head";

import { ConnectionStatus, AddBand, BandList } from "@/components";
import { BandsType } from "@/types";
import { useSocket } from "@/hooks";

export default function Home() {
  const [bands, setBands] = useState<BandsType>([]);
  const { socket, online } = useSocket("http://localhost:3001");

  useEffect(() => {
    socket.on("current-bands", (data: BandsType) => {
      setBands(data);
    });
  }, [socket]);

  const handleIncreaseVote = (id: string) => {
    socket.emit("vote-band", id);
  };

  const handleDeleteBand = (id: string) => {
    socket.emit("delete-band", id);
  };

  const handleChangeBandName = (id: string, name: string) => {
    socket.emit("change-band-name", { id, name });
  };

  const handleAddBand = (name: string) => {
    socket.emit("add-band", name);
  };

  return (
    <>
      <Head>
        <title>Band names</title>
      </Head>
      <main className="p-7">
        <ConnectionStatus isOnline={online} />
        <h1 className="mt-4 text-2xl font-bold">Band names</h1>
        <hr />
        <div className="mt-5 grid grid-cols-2 gap-4">
          <BandList
            data={bands}
            setData={setBands}
            onIncreaseVote={handleIncreaseVote}
            onDeleteBand={handleDeleteBand}
            onChangeBandName={handleChangeBandName}
          />
          <AddBand onAddBand={handleAddBand} />
        </div>
      </main>
    </>
  );
}

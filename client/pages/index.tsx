import { useEffect, useState } from "react";

import Head from "next/head";

import { ConnectionStatus, AddBand, BandList } from "@/components";
import { connectSocketServer } from "@/utils";
import { BandsType } from "@/types";

export default function Home() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState<BandsType>([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

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

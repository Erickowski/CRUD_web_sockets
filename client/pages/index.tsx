import { useEffect, useState } from "react";

import io from "socket.io-client";
import Head from "next/head";

import { ConnectionStatus, AddBand, BandList } from "@/components";
import { connectSocketServer } from "@/utils";

export default function Home() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);

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
          <BandList />
          <AddBand />
        </div>
      </main>
    </>
  );
}

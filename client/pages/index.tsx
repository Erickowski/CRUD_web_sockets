import { useContext } from "react";

import Head from "next/head";

import { ConnectionStatus, AddBand, BandList } from "@/components";
import { SocketContext } from "@/context";

export default function Home() {
  const { online } = useContext(SocketContext);

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

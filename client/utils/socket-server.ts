import io from "socket.io-client";

export const connectSocketServer = () => {
  const socket = io.connect("http://localhost:3001", {
    transports: ["websocket"],
  });

  return socket;
};

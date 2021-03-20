import { Middleware } from "redux";

import socketIOClient from "socket.io-client";
import { RootState } from "../redux/store";

export const socketMiddleware = (url: string) => {
    const socket = socketIOClient(url, { transports: ["websocket"] });

    socket.on("connect", () => {
        console.log("connected");
    });

    const middleware: Middleware<{}, RootState> = (storeApi) => {
        return (next) => (action) => next(action);
    };

    return middleware;
};

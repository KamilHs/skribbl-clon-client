import { Middleware } from "redux";
import { push } from "react-router-redux";
import socketIOClient from "socket.io-client";

import { lobbyActions } from "../redux/actions";
import { RootState } from "../redux/store";
import { AllActionTypes, CREATE_ROOM } from "../redux/types";
import { ICreateRoomResponse, isCreateRoomError } from "../socket/types";

export const socketMiddleware = (url: string) => {
    const socket = socketIOClient(url, { transports: ["websocket"] });

    socket.on("connect", () => {
        console.log("connected");
    });

    const middleware: Middleware<{}, RootState> = (storeApi) => {
        return (next) => (action: AllActionTypes) => {
            switch (action.type) {
                case CREATE_ROOM:
                    socket.emit(CREATE_ROOM, { nickname: action.payload });
                    socket.on(CREATE_ROOM, (res: ICreateRoomResponse) => {
                        if (isCreateRoomError(res)) {
                            storeApi.dispatch(
                                lobbyActions.setError(res.message)
                            );
                        } else {
                            storeApi.dispatch(
                                lobbyActions.setRoomId(res.roomId)
                            );
                            storeApi.dispatch(push("/lobby"));
                        }
                    });
                    break;
                default:
                    next(action);
            }
        };
    };

    return middleware;
};

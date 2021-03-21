import { Middleware } from "redux";
import { push } from "connected-react-router";
import socketIOClient from "socket.io-client";

import { homeActions, lobbyActions } from "../redux/actions";
import { RootState } from "../redux/store";
import { AllActionTypes, CREATE_ROOM, JOIN_ROOM } from "../redux/types";
import {
    ICreateRoomResponse,
    isHomeError,
    IJoinRoomResponse,
} from "../socket/types";
import { LOBBY_ROUTES } from "../modules/Lobby";

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
                        if (isHomeError(res)) {
                            storeApi.dispatch(
                                homeActions.setError(res.message)
                            );
                        } else {
                            storeApi.dispatch(
                                lobbyActions.setRoomId(res.roomId)
                            );
                            storeApi.dispatch(
                                push(`${LOBBY_ROUTES.MAIN}/${res.roomId}`)
                            );
                        }
                    });
                    break;
                case JOIN_ROOM:
                    socket.emit(JOIN_ROOM, action.payload);
                    socket.on(JOIN_ROOM, (res: IJoinRoomResponse) => {
                        if (isHomeError(res)) {
                            homeActions.setError(res.message);
                        } else {
                            storeApi.dispatch(
                                lobbyActions.setRoomId(res.roomId)
                            );
                            storeApi.dispatch(
                                push(`${LOBBY_ROUTES.MAIN}/${res.roomId}`)
                            );
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

import { AnyAction, Middleware, MiddlewareAPI, Dispatch } from "redux";
import { push } from "connected-react-router";
import socketIOClient from "socket.io-client";

import { homeActions, lobbyActions } from "../redux/actions";
import { RootState } from "../redux/store";
import {
    AllActionTypes,
    CREATE_ROOM,
    IPlayerData,
    JOIN_ROOM,
} from "../redux/types";
import { isHomeError, GET_PLAYERS_DATA, IHomeResponse } from "../socket/types";
import { LOBBY_ROUTES } from "../modules/Lobby";

const handleCreateAndJoinRoom = (
    storeApi: MiddlewareAPI<Dispatch<AnyAction>, RootState>,
    res: IHomeResponse
) => {
    if (isHomeError(res)) {
        homeActions.setError(res.message);
    } else {
        storeApi.dispatch(lobbyActions.setRoomId(res.roomId));
        storeApi.dispatch(push(`${LOBBY_ROUTES.MAIN}/${res.roomId}`));
    }
};

export const socketMiddleware = (url: string) => {
    const socket = socketIOClient(url, { transports: ["websocket"] });

    socket.on("connect", () => {
        console.log("connected");
    });

    const middleware: Middleware<{}, RootState> = (storeApi) => {
        socket.on(GET_PLAYERS_DATA, (data: IPlayerData[] | null) =>
            storeApi.dispatch(lobbyActions.setPlayerData(data))
        );

        return (next) => (action: AllActionTypes) => {
            switch (action.type) {
                case CREATE_ROOM:
                    socket.emit(CREATE_ROOM, { nickname: action.payload });
                    socket.on(CREATE_ROOM, (res: IHomeResponse) =>
                        handleCreateAndJoinRoom(storeApi, res)
                    );
                    break;
                case JOIN_ROOM:
                    socket.emit(JOIN_ROOM, action.payload);
                    socket.on(JOIN_ROOM, (res: IHomeResponse) =>
                        handleCreateAndJoinRoom(storeApi, res)
                    );
                    break;
                default:
                    next(action);
            }
        };
    };

    return middleware;
};

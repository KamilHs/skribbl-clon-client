import {
    CREATE_ROOM,
    JOIN_ROOM,
    SocketActionTypes,
    START_GAME,
} from "../types";

const actions = {
    createRoom: (nickname: string): SocketActionTypes => ({
        type: CREATE_ROOM,
        payload: nickname,
    }),
    joinRoom: (id: string, nickname: string): SocketActionTypes => ({
        type: JOIN_ROOM,
        payload: {
            id,
            nickname,
        },
    }),
    startGame: (roomId: string): SocketActionTypes => ({
        type: START_GAME,
        payload: roomId,
    }),
};

export default actions;

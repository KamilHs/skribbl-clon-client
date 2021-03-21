import {
    CREATE_ROOM,
    JOIN_ROOM,
    SEND_MESSAGE,
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
    sendMessage: (content: string): SocketActionTypes => ({
        type: SEND_MESSAGE,
        payload: content,
    }),
};

export default actions;

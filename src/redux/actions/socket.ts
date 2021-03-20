import { CREATE_ROOM, JOIN_ROOM, SocketActionTypes } from "../types";

const actions = {
    createRoom: (): SocketActionTypes => ({
        type: CREATE_ROOM,
    }),
    joinRoom: (id: string): SocketActionTypes => ({
        type: JOIN_ROOM,
        payload: id,
    }),
};

export default actions;

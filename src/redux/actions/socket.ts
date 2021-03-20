import { CREATE_ROOM, JOIN_ROOM, socketActionTypes } from "../types";

const actions = {
    createRoom: (): socketActionTypes => ({
        type: CREATE_ROOM,
    }),
    joinRoom: (id: string): socketActionTypes => ({
        type: JOIN_ROOM,
        payload: id,
    }),
};

export default actions;

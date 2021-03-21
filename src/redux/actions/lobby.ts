import { LobbyActionTypes, SET_ROOM_ID } from "../types";

const actions = {
    setRoomId: (roomId: string | null): LobbyActionTypes => ({
        type: SET_ROOM_ID,
        payload: roomId,
    }),
};

export default actions;

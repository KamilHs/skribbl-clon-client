import {
    IPlayerData,
    LobbyActionTypes,
    SET_PLAYERS_DATA,
    SET_ROOM_ID,
} from "../types";

const actions = {
    setRoomId: (roomId: string | null): LobbyActionTypes => ({
        type: SET_ROOM_ID,
        payload: roomId,
    }),
    setPlayerData: (players: IPlayerData[] | null): LobbyActionTypes => ({
        type: SET_PLAYERS_DATA,
        payload: players,
    }),
};

export default actions;

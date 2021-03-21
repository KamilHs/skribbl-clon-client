import {
    ILobbyState,
    LobbyActionTypes,
    SET_PLAYERS_DATA,
    SET_ROOM_ID,
} from "../types";

const initialState: ILobbyState = {
    roomId: null,
    players: [],
};

const reducer = (
    state: ILobbyState = initialState,
    action: LobbyActionTypes
): ILobbyState => {
    switch (action.type) {
        case SET_ROOM_ID:
            return {
                ...state,
                roomId: action.payload,
            };
        case SET_PLAYERS_DATA: {
            return {
                ...state,
                players: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;

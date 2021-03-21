import { ILobbyState, LobbyActionTypes, SET_ROOM_ID } from "../types";

const initialState: ILobbyState = {
    roomId: null,
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
        default:
            return state;
    }
};

export default reducer;

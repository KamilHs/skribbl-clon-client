import {
    FetchStatus,
    ILobbyState,
    LobbyActionTypes,
    SET_ERROR,
    SET_ID_FETCH_STATUS,
    SET_IS_VALID_ID,
    SET_ROOM_ID,
} from "../types";

const initialState: ILobbyState = {
    isValidId: null,
    fetchStatus: FetchStatus.none,
    roomId: null,
    error: null,
};

const reducer = (
    state: ILobbyState = initialState,
    action: LobbyActionTypes
): ILobbyState => {
    switch (action.type) {
        case SET_ID_FETCH_STATUS:
            return {
                ...state,
                fetchStatus: action.payload,
            };
        case SET_IS_VALID_ID:
            return {
                ...state,
                fetchStatus: FetchStatus.success,
                isValidId: action.payload,
            };
        case SET_ROOM_ID:
            return {
                ...state,
                fetchStatus: FetchStatus.none,
                isValidId: null,
                roomId: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                fetchStatus: FetchStatus.none,
                isValidId: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

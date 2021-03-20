import {
    FetchStatus,
    ILobbyState,
    LobbyActionTypes,
    SET_ID_FETCH_STATUS,
    SET_IS_VALID_ID,
} from "../types";

const initialState: ILobbyState = {
    isValidId: null,
    fetchStatus: FetchStatus.none,
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
        default:
            return state;
    }
};

export default reducer;

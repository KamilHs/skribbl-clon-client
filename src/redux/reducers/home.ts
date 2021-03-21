import {
    FetchStatus,
    IHomeState,
    HomeActionTypes,
    SET_ERROR,
    SET_ID_FETCH_STATUS,
    SET_IS_VALID_ID,
} from "../types";

const initialState: IHomeState = {
    isValidId: null,
    fetchStatus: FetchStatus.none,
    error: null,
};

const reducer = (
    state: IHomeState = initialState,
    action: HomeActionTypes
): IHomeState => {
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

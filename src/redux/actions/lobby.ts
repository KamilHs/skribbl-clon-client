import { ThunkAction } from "redux-thunk";

import api from "../../core/api";
import { RootState } from "../store";
import {
    FetchStatus,
    LobbyActionTypes,
    SET_ERROR,
    SET_ID_FETCH_STATUS,
    SET_IS_VALID_ID,
    SET_ROOM_ID,
} from "../types";

const actions = {
    fetchIsValidId: (
        id: string | null
    ): ThunkAction<void, RootState, unknown, LobbyActionTypes> => async (
        dispatch
    ) => {
        dispatch(actions.setIdFetchStatus(FetchStatus.loading));
        try {
            const { data } = await api.getIsValidId(id);
            dispatch(actions.setIsValidId(data.isValidId));
        } catch (err) {
            dispatch(actions.setIdFetchStatus(FetchStatus.failure));
        }
    },
    setIsValidId: (isValidId: boolean): LobbyActionTypes => ({
        type: SET_IS_VALID_ID,
        payload: isValidId,
    }),
    setIdFetchStatus: (status: FetchStatus): LobbyActionTypes => ({
        type: SET_ID_FETCH_STATUS,
        payload: status,
    }),
    setRoomId: (roomId: string | null): LobbyActionTypes => ({
        type: SET_ROOM_ID,
        payload: roomId,
    }),
    setError: (error: string | null): LobbyActionTypes => ({
        type: SET_ERROR,
        payload: error,
    }),
};

export default actions;

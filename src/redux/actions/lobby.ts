import { ThunkAction } from "redux-thunk";

import api from "../../core/api";
import { RootState } from "../store";
import {
    FetchStatus,
    LobbyActionTypes,
    SET_ID_FETCH_STATUS,
    SET_IS_VALID_ID,
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
};

export default actions;

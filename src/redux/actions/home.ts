import { ThunkAction } from "redux-thunk";

import api from "../../core/api";
import { RootState } from "../store";
import {
    FetchStatus,
    HomeActionTypes,
    SET_ERROR,
    SET_ID_FETCH_STATUS,
    SET_IS_VALID_ID,
} from "../types";

const actions = {
    fetchIsValidId: (
        id: string | null
    ): ThunkAction<void, RootState, unknown, HomeActionTypes> => async (
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
    setIsValidId: (isValidId: boolean): HomeActionTypes => ({
        type: SET_IS_VALID_ID,
        payload: isValidId,
    }),
    setIdFetchStatus: (status: FetchStatus): HomeActionTypes => ({
        type: SET_ID_FETCH_STATUS,
        payload: status,
    }),
    setError: (error: string | null): HomeActionTypes => ({
        type: SET_ERROR,
        payload: error,
    }),
};

export default actions;

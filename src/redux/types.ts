export const SET_IS_VALID_ID = "SET_IS_VALID_ID";
export const SET_ID_FETCH_STATUS = "SET_ID_FETCH_STATUS";

export enum FetchStatus {
    none,
    success,
    loading,
    failure,
}

export interface IFetchIsValidIdResult {
    isValidId: boolean;
}

interface ISetIsValidId {
    type: typeof SET_IS_VALID_ID;
    payload: boolean;
}

interface ISetIdFetchStatus {
    type: typeof SET_ID_FETCH_STATUS;
    payload: FetchStatus;
}

export type LobbyActionTypes = ISetIsValidId | ISetIdFetchStatus;

export interface ILobbyState {
    fetchStatus: FetchStatus;
    isValidId: boolean | null;
}

export const SET_IS_VALID_ID = "SET_IS_VALID_ID";
export const SET_ID_FETCH_STATUS = "SET_ID_FETCH_STATUS";
export const CREATE_ROOM = "CREATE_ROOM";
export const JOIN_ROOM = "JOIN_ROOM";
export const SET_ROOM_ID = "SET_ROOM_ID";
export const SET_ERROR = "SET_ERROR";

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

interface ISetRoomId {
    type: typeof SET_ROOM_ID;
    payload: string | null;
}

interface ISetError {
    type: typeof SET_ERROR;
    payload: string | null;
}

interface ICreateRoom {
    type: typeof CREATE_ROOM;
    payload: string;
}

interface IJoinRoom {
    type: typeof JOIN_ROOM;
    payload: string;
}

export type SocketActionTypes = ICreateRoom | IJoinRoom;
export type HomeActionTypes = ISetIsValidId | ISetIdFetchStatus | ISetError;
export type LobbyActionTypes = ISetRoomId;

export type AllActionTypes =
    | SocketActionTypes
    | HomeActionTypes
    | LobbyActionTypes;

export interface IHomeState {
    fetchStatus: FetchStatus;
    isValidId: boolean | null;
    error: string | null;
}

export interface ILobbyState {
    roomId: string | null;
}

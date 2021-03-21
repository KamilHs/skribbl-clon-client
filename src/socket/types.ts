export const GET_PLAYERS_DATA = "GET_PLAYERS_DATA";
export interface IHomeError {
    error: true;
    message: string;
}

export interface ICreateRoomSuccess {
    roomId: string;
}
export interface IJoinRoomSuccess {
    roomId: string;
}

export type ICreateRoomResponse = IHomeError | ICreateRoomSuccess;
export type IJoinRoomResponse = IHomeError | IJoinRoomSuccess;

export const isHomeError = (
    data: IHomeError | ICreateRoomSuccess
): data is IHomeError => {
    return (data as IHomeError).error !== void 0;
};

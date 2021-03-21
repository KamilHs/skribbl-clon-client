export interface ICreateRoomError {
    error: true;
    message: string;
}

export interface ICreateRoomSuccess {
    roomId: string;
}

export type ICreateRoomResponse = ICreateRoomError | ICreateRoomSuccess;

export const isCreateRoomError = (
    data: ICreateRoomError | ICreateRoomSuccess
): data is ICreateRoomError => {
    return (data as ICreateRoomError).error !== void 0;
};

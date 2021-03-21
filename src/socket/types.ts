export interface ICreateRoomError {
    error: true;
    message: string;
}

export interface ICreteRoomSuccess {
    roomId: string;
}

export type ICreateRoomResponse = ICreateRoomError | ICreteRoomSuccess;

export const isCreateRoomError = (
    data: ICreateRoomError | ICreteRoomSuccess
): data is ICreateRoomError => {
    return (data as ICreateRoomError).error !== void 0;
};

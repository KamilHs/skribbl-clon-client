export const GET_PLAYERS_DATA = "GET_PLAYERS_DATA";
export const GET_MESSAGE = "GET_MESSAGE";

export interface IHomeError {
    error: true;
    message: string;
}
export interface IHomeSuccess {
    roomId: string;
}
export type IHomeResponse = IHomeError | IHomeSuccess;

export const isHomeError = (
    data: IHomeError | IHomeSuccess
): data is IHomeError => {
    return (data as IHomeError).error !== void 0;
};

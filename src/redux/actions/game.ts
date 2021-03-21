import { GameActionTypes, IMessage, SEND_MESSAGE, SET_MESSAGE } from "../types";

const actions = {
    setMessage: (message: IMessage): GameActionTypes => ({
        type: SET_MESSAGE,
        payload: message,
    }),
};

export default actions;

import { GameActionTypes, IGameState, SET_MESSAGE } from "../types";

const initialState: IGameState = {
    messages: [],
};

const reducer = (state = initialState, action: GameActionTypes): IGameState => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;

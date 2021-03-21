import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import GameReducer from "./game";
import homeReducer from "./home";
import lobbyReducer from "./lobby";

const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        home: homeReducer,
        game: GameReducer,
        lobby: lobbyReducer,
    });

export default createRootReducer;

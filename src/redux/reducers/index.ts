import { combineReducers } from "redux";

import GameReducer from "./game";
import homeReducer from "./home";
import lobbyReducer from "./lobby";

export default combineReducers({
    home: homeReducer,
    game: GameReducer,
    lobby: lobbyReducer,
});

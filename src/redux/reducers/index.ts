import { combineReducers } from "redux";

import GameReducer from "./game";
import LobbyReducer from "./lobby";

export default combineReducers({
    lobby: LobbyReducer,
    game: GameReducer,
});

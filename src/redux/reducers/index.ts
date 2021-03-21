import { combineReducers } from "redux";

import GameReducer from "./game";
import homeReducer from "./home";

export default combineReducers({
    home: homeReducer,
    game: GameReducer,
});

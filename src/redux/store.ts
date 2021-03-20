import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { socketMiddleware } from "../middlewares/socketMiddleware";

import rootReducer from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, socketMiddleware("http://localhost:5555")];

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

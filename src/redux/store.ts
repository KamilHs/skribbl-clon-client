import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

import { socketMiddleware } from "../middlewares/socketMiddleware";

import createRootReducer from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
const middlewares = [
    thunk,
    socketMiddleware("http://localhost:5555"),
    routerMiddleware(history),
];
const rootReducer = createRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

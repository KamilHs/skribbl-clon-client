import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { HomeRoutes } from "./modules/Home";
import { LobbyRoutes } from "./modules/Lobby";
import store from "./redux/store";

const App: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <LobbyRoutes />
            <HomeRoutes />
        </BrowserRouter>
    </Provider>
);

export default App;

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { HomeRoutes } from "./modules/Home";
import store from "./redux/store";

const App: React.FC = () => {
    const s = 123;
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HomeRoutes />
            </BrowserRouter>
        </Provider>
    );
};

export default App;

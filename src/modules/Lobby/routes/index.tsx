import React from "react";
import { Route } from "react-router-dom";

import Lobby from "../components";

import { LOBBY_ROUTES } from "./const";

export const LobbyRoutes: React.FC = () => (
    <Route path={LOBBY_ROUTES.JOINED} component={Lobby} exact />
);

import React from "react";
import { Route } from "react-router-dom";

import Game from "../components";

import { GAME_ROUTES } from "./const";

export const GameRoutes: React.FC = () => (
    <Route path={GAME_ROUTES.JOINED} component={Game} exact />
);

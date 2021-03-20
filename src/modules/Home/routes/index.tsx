import React from "react";
import { Route } from "react-router-dom";

import Home from "../components";

import { HOME_ROUTES } from "./const";

export const HomeRoutes: React.FC = () => (
  <Route path={[HOME_ROUTES.MAIN, HOME_ROUTES.JOIN]} component={Home} exact />
);

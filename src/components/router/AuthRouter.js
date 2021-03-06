import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";

export const AuthRouter = () => {
  return (
        <Switch>
          <Route exact path="/login" component={LoginScreen} />

          <Route exact path="/register" component={RegisterScreen} />

          <Redirect to="/login" />
        </Switch>
  );
};

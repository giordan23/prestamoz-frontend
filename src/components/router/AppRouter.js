import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  useRouteMatch
  // Link
} from "react-router-dom";

// import { LoginScreen } from '../auth/LoginScreen';
// import { RegisterScreen } from '../auth/RegisterScreen';
// import { CajaScreen } from '../layout/CajaScreen';
// import { PrestamosScreen } from '../layout/PrestamosScreen';
// import { Sidebar } from '../ui/Navbar/Sidebar';
import { AuthRouter } from "./AuthRouter";
import { LayoutRouter } from "./LayoutRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <PublicRoute exact path="/login" component={AuthRouter} isLoggedIn={true} />
          <PublicRoute exact path="/register" component={AuthRouter} isLoggedIn={true} />
          <PrivateRoute
            path="/"
            component={LayoutRouter}
            isLoggedIn={true}
          />

          <Redirect to="/login" />
        </Switch>
    </Router>
  );
};

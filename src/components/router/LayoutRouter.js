import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CajaScreen } from "../layout/CajaScreen";
import { DashboardScreen } from "../layout/DashboardScreen";
import { PrestamosScreen } from "../layout/PrestamosScreen";
import { Sidebar } from "../ui/Navbar/Sidebar";

export const LayoutRouter = () => {
  return (
      <>
          <Sidebar></Sidebar>
        <Switch>

          <Route exact path="/caja" component={CajaScreen} />
          <Route exact path="/prestamos" component={PrestamosScreen} />
          <Route exact path="/" component={DashboardScreen} />
          <Redirect to="/" />
        </Switch> </>
  );
};

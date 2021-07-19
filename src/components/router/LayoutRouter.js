import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { CajaScreen } from "../layout/CajaScreen";
import { DashboardScreen } from "../layout/DashboardScreen";
import { PrendarioUsuario } from "../layout/Prestamos/PrendarioUsuario";
import { PrestamosScreen } from "../layout/PrestamosScreen";
import { Sidebar } from "../ui/Navbar/Sidebar";

export const LayoutRouter = () => {

  return (
    <div className="h-screen">
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/" component={DashboardScreen} />
        <Route exact path="/caja" component={CajaScreen} />
        <Route exact path="/prestamos" component={PrestamosScreen} />
        <Route exact path="/prestamos/prendario" component={PrendarioUsuario} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

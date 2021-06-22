import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { Layout } from '../layout/Layout';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={LoginScreen}></Route>
                <Route exact path='/register' component={RegisterScreen}></Route>
                <Route exact path='/' component={Layout}></Route>
            </Switch>
        </Router>
    )
}

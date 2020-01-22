import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";

export default function Routes({ appProps }) {
    return(
        <Switch>
            <Route path="/" exact component={Home} appProps={appProps} />
            <Route path="/login" exact component={Login} appProps={appProps} />
            <Route path="/signup" exact component={Signup} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}
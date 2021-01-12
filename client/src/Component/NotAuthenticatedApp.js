import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../View/Login";
import Registration from "../View/Registration";

//If you're not authenticated and tries to login, you get redirected back to login
function NotAuthenticatedApp() {
  return (
    <Switch>
      <Route path={"/"} exact>
        <Redirect to={"/Login"} />
      </Route>
      <Route path={"/Login"}>
        <Login />
      </Route>
      <Route path={"/Registration"}>
        <Registration />
      </Route>
      <Route path="*" exact>
        <Redirect to={"/Login"} />
      </Route>
    </Switch>
  );
}

export default NotAuthenticatedApp;

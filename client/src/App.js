import React from "react";
import Dashboard from "./View/Dashboard";
import "./App.scss";
import NotAuthenticatedApp from "./Component/NotAuthenticatedApp";
import { TokenContext } from "./Component/TokenProvider";
require("dotenv").config();

//importing the tokenContext object, which are null. We return either the dashboard or the NotAuthenticatedApp, depending on, we're authenticated or not

function App() {
  const { token } = React.useContext(TokenContext); //henter token
  return token ? <Dashboard /> : <NotAuthenticatedApp />;
}

export default App;

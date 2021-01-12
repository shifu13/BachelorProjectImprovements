import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./Component/TokenProvider";

ReactDOM.render(
  <TokenProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TokenProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ErrorBoundary render={() => <div className="error">Un problemita...</div>}>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
registerServiceWorker();

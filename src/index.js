import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store/redux-store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import "./assets/Roboto/Roboto-Regular.ttf";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

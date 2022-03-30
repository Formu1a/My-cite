import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./components/redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import JsApp from "./App";

ReactDOM.render(<JsApp />, document.getElementById("root"));

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.css";

import App from "./App";

require("dotenv").config();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

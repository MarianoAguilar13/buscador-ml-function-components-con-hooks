import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

class Home extends React.Component {
  render() {
    return <App></App>;
  }
}

ReactDOM.render(<Home />, document.getElementById("insertar"));

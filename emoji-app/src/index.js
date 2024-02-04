import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import emojipedia from "./emoji";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const result = emojipedia.map(function (props) {
  return props.meaning.substring(0, 100);
});

console.log(result);
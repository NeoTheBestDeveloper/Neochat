import React from "react";
import ReactDom from "react-dom";
import MainApp from "./../App.js";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<MainApp />, div);
  ReactDom.unmountComponentAtNode(div);
});

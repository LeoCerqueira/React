import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";



const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Rara",
      animal: "Dog",
      breed: "Border Collie",
    }),
    React.createElement(Pet, {
      name: "Xodo",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "Coscuz",
      animal: "Cat",
      breed: "Manicum",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

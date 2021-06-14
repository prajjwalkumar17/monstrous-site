/** @format */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "HeatBlast",
          id: "pk11",
        },
        {
          name: "FourArms",
          id: "pk12",
        },
        {
          name: "Humongosaur",
          id: "pk13",
        },
        {
          name: "XLR8",
          id: "pk14",
        },
        {
          name: "SwarmFire",
          id: "pk15",
        },
        {
          name: "SpiderMonkey",
          id: "pk16",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;

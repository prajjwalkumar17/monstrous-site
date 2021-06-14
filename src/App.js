/** @format */
import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

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
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="pk" />
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;

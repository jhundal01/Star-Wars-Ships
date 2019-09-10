import React, { Component } from "react";
import Header from "./components/Header/index";
import Card from "./components/Card/index";
import "./App.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      ships: []
    };
  }
  componentDidMount() {
    const { ships } = this.state;
    fetch("https://swapi.co/api/starships")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          ships: data.results
        });
      });
  }
  render() {
    const { ships } = this.state;
    console.log(ships);
    if (ships.length > 1) {
      return (
        <div>
          <Header />
            {ships.map(ship => {
              return <Card {...ship} />;
            })}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}
export default Home;

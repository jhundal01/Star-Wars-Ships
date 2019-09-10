import React, { Component } from "react";
import Header from "./components/Header/index";
import Card from "./components/Card/index";
import Button from "./components/Button/index";
import "./App.css";
// import styled from "styled-components";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      type: "starships",
      info: []
    };
  }
  // handleClick() {
  //   if (this.state.type === "starships") {
  //     this.setState({
  //       type: "vehicles"
  //     });
  //   } else {
  //     this.setState({
  //       type: "starships"
  //     });
  //   }
  // }
  componentDidMount() {
    const { info, type } = this.state;
    fetch("https://swapi.co/api/" + type)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          info: data.results
        });
      });
  }
  render() {
    // const { info, type } = this.state;
    if (this.state.info.length > 1) {
      return (
        <div>
          <Header Label={this.state.type} />
          {/* <Button onClick={alert("clicked")} Label={this.state.type} /> */}
          {this.state.info.map(ship => {
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

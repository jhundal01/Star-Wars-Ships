import React, { Component } from "react";
import styled from "styled-components";
const Text = styled.h1`
  color: #ffe200;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
class Header extends Component {
  render() {
    return (
      <div>
        <Text>Star Wars {this.props.Label}</Text>
      </div>
    );
  }
}
export default Header;

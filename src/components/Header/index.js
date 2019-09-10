import React from "react";
import styled from "styled-components";
const Text = styled.h1`
  color: white;
`;
class Header extends React.Component {
  render() {
    return (
      <div>
        <Text>The Star Wars Spaceships</Text>
      </div>
    );
  }
}
export default Header;

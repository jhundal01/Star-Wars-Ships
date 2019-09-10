import React, { Component } from "react";
import { Text2, Text, Wrapper, Box } from "./styled";
class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <Wrapper>
          <Box>
            <Text>{this.props.name}</Text>
            <Text2>Model: </Text2> {this.props.model}
            <br />
            <Text2>Manufacturer: </Text2> {this.props.manufacturer}
            <br />
            <Text2>Starship Class:</Text2> {this.props.starship_class}
            <br />
            <Text2>Created:</Text2> {this.props.created}
          </Box>
        </Wrapper>
      </div>
    );
  }
}
export default Card;

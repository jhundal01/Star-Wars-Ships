import React, { Component } from "react";
import { Pic, Wrapper, Box } from "./styled";
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
            <h1>{this.props.name}</h1>
            {this.props.model}
            {this.props.manufacturer}
            {this.props.starship_class}
            {this.props.created}
          </Box>
        </Wrapper>
      </div>
    );
  }
}
export default Card;

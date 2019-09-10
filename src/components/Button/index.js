import React, { Component } from "react";
import { Box } from "./styled";
class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Box>{this.props.Label}</Box>;
  }
}
export default Button;

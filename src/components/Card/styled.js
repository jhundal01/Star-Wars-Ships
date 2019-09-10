import styled from "styled-components";
const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;
const Box = styled.div`
  height: 30px;
  width: 400px;
  background: #ffe200;
  margin: 40px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 13px 13px rgba(255, 226, 0, 1);
  -moz-box-shadow: 0px 0px 13px 13px rgba(255, 226, 0, 1);
  box-shadow: 0px 0px 13px 13px rgba(255, 226, 0, 1);
  &:hover {
    width: 550px;
    height: 180px;
  }
`;
const Text = styled.div`
  font-size: xx-large;
  padding-bottom: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
const Text2 = styled.h4`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  display: inline;
  font-size: medium;
`;
export { Text2, Text, Box, Wrapper };

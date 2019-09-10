import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  height: 200px;
  width: 400px;
  background: papayawhip;
  margin: 20px;
  box-shadow: 10px 10px 5px grey;
`;

const Pic = styled.image`
  height: 40px;
  width: 100px;
`;
export { Pic, Box, Wrapper };

import styled from "styled-components";

const Box = styled.button`
  color: black;
  display: inline-flex;
  height: 20px;
  width: 70px;
  background: #ffe200;
  border-radius: 4px 4px 4px 4px;
  box-shadow: 0px 0px 8px 8px #ffe200;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export { Box };

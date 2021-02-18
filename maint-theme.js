import styled from "styled-compoents";
//create a switch case statement to handle multiple props on a styled-component and pass the props to the switch case statement
const handleColorType = color => {
  switch (color) {
    case "primary":
      return "blue";
    case "danger":
      return "red";
    default:
      return "gray";
  }
};

export const Button = styled.button`
  display: block;
  cursor: pointer;
  border: 0;
  margin: 5px 0;
  background: #000;
  font-size: 20px;
  color: ${({ color }) => handleColorType(color)};

  &:focus {
    outline: 0;
  }
`;

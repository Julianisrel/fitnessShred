import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: ${({ padding }) => (padding ? padding : "6px 1em")};;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: ${({ color }) => (color ? color : "#d1ac19")};
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${({ color }) => (color ? color : "#d1ac19")};
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size, color, padding } = props;

  return (
    <ButtonWrapper size={size} color={color} padding={padding} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}

import React from "react";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (theme, position, size) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];

  return `${property}:${theme.sizes[sizeIndex]}`;
};

export const Spacer = styled.View`
  ${({ theme, position, size }) => getVariant(theme, position, size)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

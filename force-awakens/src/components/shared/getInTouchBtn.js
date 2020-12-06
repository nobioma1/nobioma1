import React from "react";
import styled from "styled-components";

import ScrollLink from "@shared/scrollLink";

const Button = styled(ScrollLink)`
  color: ${({ theme }) => theme.colors.oxfordBlue};
  background: ${({ theme }) => theme.colors.maxBlueGreen};
  text-transform: uppercase;
  height: 3rem;
  width: 10rem;
  border: none;
  border-radius: 5px;
  position: relative;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;

  &:hover {
    background: transparent;
    color: white;

    div {
      height: 3rem;
      width: 10rem;
      left: 0;
      border-radius: 0;
      border-bottom: 2px solid #eee;
    }
  }

  & > span {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & > div {
    width: 5px;
    height: 5px;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    transition: 500ms;
  }
`;

const GetInTouchBtn = () => {
  return (
    <Button to="contact">
      <span>Get In Touch &rarr;</span>
      <div />
    </Button>
  );
};

export default GetInTouchBtn;

import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  width: 142px;
  height: 40px;
  filter: contrast(20);

  & .dot {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 12px;
    left: 15px;
    background: ${({ theme }) => theme.colors.maxBlueGreen};
    border-radius: 50%;
    transform: translateX(0);
    animation: dot 2.8s infinite;
  }

  & .dots {
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 2.8s infinite;
  }

  span {
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    margin-left: 16px;
    background: ${({ theme }) => theme.colors.maxBlueGreen};
    border-radius: 50%;
  }

  @keyframes dot {
    50% {
      transform: translateX(60px);
    }
  }

  @keyframes dots {
    50% {
      transform: translateX(-30px);
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledLoading>
  );
};

export default Loading;

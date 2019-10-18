import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.section`
  min-height: ${props => (props.fullHeight ? '100vh' : 'auto')};
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: ${props => (props.bg ? props.bg : 'none')};
  color: ${props => (props.light ? '#000' : '#FFF')};
  border: none;

  @media (min-width: 500px) {
    padding: 10px;
  }

  & > div {
    display: flex;
    align-items: ${props => (props.centerY ? 'center' : 'flex-start')};
    justify-content: ${props => (props.centerX ? 'center' : 'flex-start')};
    width: 100%;
    flex-direction: column;

    & > h1 {
      font-size: 3.8rem;
      margin-bottom: 10px;
      border-bottom: 3px solid ${props => (props.light ? '#000' : '#FFF')};
      padding: 5px;
      text-align: center;
    }

    @media (min-width: 800px) {
      width: 780px;

      & > h1 {
        font-size: 3.8rem;
      }
    }
  }
`;

const Layout = ({
  children,
  bg,
  centerX,
  centerY,
  title,
  id,
  fullHeight,
  fontColor,
}) => {
  return (
    <LayoutContainer
      bg={bg}
      centerX={centerX}
      centerY={centerY}
      fullHeight={fullHeight}
      fontColor={fontColor}
    >
      <div id={id}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;

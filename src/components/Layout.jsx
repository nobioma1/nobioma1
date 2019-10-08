import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.section`
  min-height: ${props => (props.fullHeight ? '100vh' : 'auto')};
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: ${props => (props.bg ? props.bg : 'none')};
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
      font-size: 3rem;
      margin-bottom: 5px;
      border-bottom: 3px solid #000;
      padding: 5px;
    }

    @media (min-width: 800px) {
      width: 780px;

      & > h1 {
        font-size: 3.5rem;
      }
    }
  }
`;

const Layout = ({ children, bg, centerX, centerY, title, id, fullHeight }) => {
  return (
    <LayoutContainer
      bg={bg}
      centerX={centerX}
      centerY={centerY}
      fullHeight={fullHeight}
    >
      <div id={id}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;

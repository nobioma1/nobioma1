import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 50px 5px 5px 5px;
  justify-content: center;
  background-color: ${props => (props.bg ? props.bg : 'none')};

  & > div {
    display: flex;
    align-items: ${props => (props.centerY ? 'center' : 'flex-start')};
    justify-content: ${props => (props.centerX ? 'center' : 'flex-start')};
    width: 100%;
    flex-direction: column;

    & > h1 {
      font-size: 3.2rem;
    }

    @media (min-width: 800px) {
      width: 850px;
    }
  }
`;

const Layout = ({ children, bg, centerX, centerY, title, id }) => {
  return (
    <LayoutContainer bg={bg} centerX={centerX} centerY={centerY}>
      <div id={id}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;

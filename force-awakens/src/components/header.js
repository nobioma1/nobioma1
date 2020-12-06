import React from "react";
import styled from "styled-components";

import Nav from "@components/nav";
import MaxWidthLayout from "@layouts/maxWidth";
import ScrollLink from "@shared/scrollLink";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `0 ${theme.spacing.md}`};

  svg {
    @media only screen and (min-width: 720px) {
      display: none;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.maxBlueGreen};
    letter-spacing: 0.25em;
    font-size: 1em;
  }
`;

const Header = () => {
  return (
    <MaxWidthLayout bgColor="oxfordBlue" position="fixed" zIndex={9999}>
      <HeaderContainer>
        <ScrollLink to="home">
          <h1>Noble Obioma</h1>
        </ScrollLink>
        <Nav />
      </HeaderContainer>
    </MaxWidthLayout>
  );
};

export default Header;

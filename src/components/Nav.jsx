import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavContainer = styled.nav`
  position: absolute;
  display: block;
  width: 100%;
  height: ${props => (props.isOpen ? '130px' : '0px')};
  background-color: #081c35;
  transition: all 0.5s ease-in-out;
  overflow-y: hidden;
  top: 50px;
  left: 0px;

  @media (min-width: 500px) {
    position: relative;
    width: auto;
    height: auto;
    top: auto;
    left: auto;
    background-color: transparent;
    overflow-y: visible;
    position: absolute;
  }

  a {
    display: block;
    width: 100%;
    padding: 10px;
    text-decoration: none;
    color: #efefef;
    font-size: 1.8rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &.active {
      background-color: rgba(0, 0, 0, 0.3);
    }

    @media (min-width: 500px) {
      display: inline-block;
      width: fit-content;
      padding: 14px 30px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const NavItem = ({ link, fn }) => {
  return (
    <Link
      activeClass="active"
      to={link.toLowerCase()}
      onClick={fn}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {link}
    </Link>
  );
};

const Nav = ({ navState, navHandler }) => {
  const navItems = ['Home', 'About', 'Projects'];
  return (
    <NavContainer isOpen={navState}>
      {navItems.map((item, index) => (
        <NavItem key={`${item}-${index}`} link={item} fn={navHandler} />
      ))}
    </NavContainer>
  );
};

export default Nav;

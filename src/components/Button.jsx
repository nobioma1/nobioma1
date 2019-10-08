import React from 'react';
import styled from 'styled-components';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const LinkButton = styled(Link)`
  background: none;
  border: 2px solid white;
  padding: 10px;
  font-size: 2rem;
  font-weight: light;
  color: white;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 3px;

  svg {
    margin-left: 10px;
    font-size: 3rem;
  }

  &:hover {
    color: white;
    background: #4e6ac6;
  }
`;

export const HomeButton = ({ link }) => {
  return (
    <LinkButton
      activeClass="active"
      to={link.toLowerCase()}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      View About Me <FaAngleDoubleDown />
    </LinkButton>
  );
};

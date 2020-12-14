import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import themeObj from "../theme";
import ScrollLink from "@shared/scrollLink";

const NavItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.3s ease-in-out;
  overflow-y: hidden;
  top: 3.75rem;
  left: 0;
  height: ${({ isOpen }) => (isOpen ? "11.5rem" : 0)};
  padding: ${({ theme, isOpen }) => (isOpen ? theme.spacing.md : 0)};
  background-color: ${({ theme }) => theme.colors.spaceCadet};
  border-bottom: ${({ isOpen, theme }) =>
    isOpen ? `0.5px solid ${theme.colors.maxBlueGreen}` : "none"};

  @media only screen and (min-width: 720px) {
    flex-direction: row;
    width: unset;
    top: initial;
    height: initial;
    position: relative;
    background: unset;
    align-items: center;
    border-bottom: none;
  }

  .link {
    font-size: 1em;
    padding: ${({ theme }) => theme.spacing.sm} 0;
    text-decoration: none;
    color: white;
    transition: 0.5s;
    width: fit-content;

    &:hover,
    &.active {
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.maxBlueGreen}`};
    }

    @media only screen and (min-width: 720px) {
      &:not(:last-child) {
        margin-right: 3.8rem;
      }
    }
  }

  button {
    font-size: 1em;
    border-radius: 5px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    margin: ${({ theme }) => theme.spacing.sm} 0;
    padding: ${({ theme }) => theme.spacing.sm};
    border: ${({ theme }) => `1px solid ${theme.colors.sunshine}`};

    &:hover {
      border: ${({ theme }) => `1px solid ${theme.colors.maxBlueGreen}`};
    }

    &:focus {
      outline: none;
    }
  }

  .hover {
    &:hover {
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.maxBlueGreen}`};
    }
  }

  li {
    list-style: none;
    padding: 0;
  }
`;

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HiOutlineMenuAlt3
        size="1.8rem"
        color={themeObj.colors.sunshine}
        onClick={() => setOpen(!isOpen)}
      />
      <NavItems isOpen={isOpen}>
        {["About", "Work", "Articles"].map(title => (
          <ScrollLink
            key={title}
            to={title.toLowerCase()}
            className="link"
            clickHandler={() => setOpen(false)}
          >
            {title}
          </ScrollLink>
        ))}
        <button>Resume</button>
      </NavItems>
    </>
  );
};

export default Nav;

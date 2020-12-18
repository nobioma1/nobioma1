import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
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

  svg {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

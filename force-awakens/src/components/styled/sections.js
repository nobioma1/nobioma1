import styled from "styled-components";

export const StyledSectionsWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

export const StyledSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  & > section {
    padding: ${({ theme }) =>
      `0 ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md}`};
  }
`;

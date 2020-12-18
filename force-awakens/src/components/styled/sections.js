import styled from "styled-components";

export const StyledSectionsWrapper = styled.div`
  padding-top: 3.75rem;
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

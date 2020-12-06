import styled from "styled-components";

export const StyledLine = styled.div`
  height: 0px;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme, color }) => color || theme.colors.oxfordBlue};
  display: ${props => (props.noLine ? "none" : "flex")};
  width: ${props => props.width || "80px"};

  ${({ vertical, theme }) =>
    vertical &&
    `@media only screen and (min-width: 720px) {
      width: 0px;
      height: 80px;
      border-bottom: none;
      border-right: 1px solid ${theme.colors.oxfordBlue};
    }`}
`;

import styled, { createGlobalStyle, css } from 'styled-components';

const BG_COLOR = '#FCFAFA';
const BLUE = '#4E6AC6';
const TEXT_COLOR = '#FFFFFF';

// font-sizes
const LARGE_FONT = '6.2rem';
const MEDIUM_FONT = '2.2rem';
const TEXT_FONT = '1.8rem';
const SMALL_FONT = '1.3rem';

export const GlobalCss = createGlobalStyle`
  *,
  html {
    margin: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-weight: lighter;
  }
  @media (max-width: 500px) {
    *,
    html {
      font-size: 50%;
    }
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => (props.color ? props.color : BG_COLOR)};
  }
`;

// shared
export const ImageContainer = styled.div`
  width: 250px;

  @media (max-width: 800px) {
    width: 40%;
  }

  img {
    border-radius: 5px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${MEDIUM_FONT};
  margin: 10px 0;
  font-weight: 350;
`;

// App Styles
export const AppContainer = styled.div`
  width: 690px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`;

// Header Styles
export const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  padding: 20px 0;
  justify-content: flex-end;
`;

export const NavItem = styled.p``;

export const Contact = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin: 0 35px;
  cursor: pointer;
  font-weight: lighter;

  &:last-child {
    margin-right: 0;
  }
`;

export const Icon = styled.div`
  a {
    text-decoration: none;
    color: ${BLUE};
    svg {
      font-size: ${TEXT_FONT};
    }
  }
`;

// Home Styles
export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 460px;

  @media (max-width: 800px) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 500px) {
    height: 250px;
  }
`;

export const Hello = styled.div`
  width: 100px;
  text-align: center;
  background-color: ${BLUE};
  color: ${TEXT_COLOR};
  padding: 5px;
  margin: 10px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  p {
    font-size: ${TEXT_FONT};
  }
`;

export const Info = styled.div`
  @media (max-width: 800px) {
    width: 50%;
  }

  h1 {
    font-size: ${LARGE_FONT};
    font-weight: 400;
  }

  p {
    font-size: ${TEXT_FONT};
    padding-left: 5px;
  }
`;

// About Style
export const AboutContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CodingAvatar = styled.div`
  padding-right: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const AboutInfo = styled.div`
  p {
    font-size: ${TEXT_FONT};
    text-align: justify;
    line-height: 1.5;
  }
`;

export const Lang = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    border-radius: 3px;
    margin: 5px;
    border: 1px solid ${BLUE};
    width: 45%;
    font-size: ${SMALL_FONT};
    padding: 5px;
    font-weight: 450;
  }
`;

// ProjectList
export const Projects = styled.div``;

// Footer
export const FooterContainer = styled.div`
  padding: 20px;
  p {
    font-size: 1rem;
    text-align: center;
  }
`;

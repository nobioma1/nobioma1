import styled, { createGlobalStyle } from 'styled-components';

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
    font-weight: 300;
    color: ${props => (props.mode === 'dark' ? 'white;' : 'null')};
    ${props =>
      props.mode === 'dark' ? 'transition: 2s ease-in-out;' : 'null'};
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
    background-color: ${props => (props.mode === 'dark' ? 'black' : BG_COLOR)};
    ${props =>
      props.mode === 'dark' ? 'transition: 2s ease-out;' : 'transition: 1s ease-in;'};
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

export const SwitchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  height: 50px;
  background-color: #e8e8e8;
  padding: 5px;
  border-radius: 3px;
  opacity: 0.5;
  z-index: 999;

  &:hover {
    opacity: 1;
  }

  svg {
    font-size: ${MEDIUM_FONT};
    cursor: pointer;

    & > :nth-of-type(1) {
      color: ${BLUE};
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
    height: 380px;
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
export const Projects = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Project = styled.div`
  width: calc(95% / 3);
  border: 1px solid lightgray;
  margin: 5px 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;

  img {
    width: 100%;
    height: 180px;
  }

  @media (max-width: 800px) {
    width: calc(95% / 2);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 90px;

  h4 {
    font-size: ${TEXT_FONT};
  }

  p {
    font-size: ${SMALL_FONT};

    span {
      text-decoration: underline;
      margin-right: 3px;
      font-size: 1.3rem;
    }
  }
`;

export const Links = styled.div`
  position: absolute;
  bottom: 0;
  justify-content: space-around;

  a {
    font-size: 3.2rem;
    color: ${BLUE};
    width: 20px;
    margin: 10px;

    @media (max-width: 500px) {
      font-size: 3.9rem;
    }
  }
`;

// Footer
export const FooterContainer = styled.div`
  padding: 20px;
  p {
    font-size: 1rem;
    text-align: center;
  }
`;

import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Typed from "typed.js";

import Socials from "@components/socials";
import GetInTouchBtn from "@shared/getInTouchBtn";
import MaxWidthLayout from "@layouts/maxWidth";

const HeroContainer = styled.div`
  position: relative;

  .rel {
    position: relative;
  }

  .abs {
    position: absolute;
  }

  .bg {
    width: 50%;
  }

  .content {
    min-height: 34rem;
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.oxfordBlue};
    border-bottom: 15px solid ${({ theme }) => theme.colors.spaceCadet};

    @media only screen and (min-width: 720px) {
      margin-right: 16rem;
      border-right: 15px solid ${({ theme }) => theme.colors.spaceCadet};
      border-radius: 0 0 30px 0;
    }

    @media only screen and (min-width: 820px) {
      height: 40rem;
      padding: 4rem ${({ theme }) => theme.spacing.md};
    }
  }
`;

const HeroContent = styled.div`
  position: relative;

  h1 {
    font-size: 4em;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(255, 211, 87, 1) 39%,
      rgba(91, 192, 190, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & span {
      background: unset;
      background-clip: initial;
      -webkit-text-fill-color: initial;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.independence};
  }
  .typed-container {
    font-size: 2.25em;
    min-height: 125px;
    max-width: 70%;
    color: white;
    margin: 3rem 0;

    .typed-cursor {
      color: white;
    }

    .typed {
      & > span {
        color: ${({ theme }) => theme.colors.maxBlueGreen};
      }
    }
  }

  .cursor {
    border-right: 0.05em solid;
    animation: caret 1s steps(1) infinite;
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
`;

const Avatar = styled(Img)`
  display: none;

  @media only screen and (min-width: 720px) {
    display: block;
    position: absolute !important;
    width: 300px;
    height: 300px;
    top: 88px;
    right: -160px;
  }

  @media only screen and (min-width: 820px) {
    top: 125px;
  }
`;

const Hero = ({ openContact }) => {
  const textRef = useRef();
  const query = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  useEffect(() => {
    const strings = [
      "I build applications <br />for <span>the Web.</span>",
      "I build applications <br />for <span>the next million users.</span>",
      'I also JAM <span role="img" aria-label="guitar">🎸</span><span role="img" aria-label="smile">😀</span>.',
    ];

    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HeroContainer id="home">
      <div className="content abs bg" />
      <MaxWidthLayout>
        <HeroContent>
          <div className="content rel">
            <div>
              <h1>
                Hi{" "}
                <span role="img" aria-label="hand wave">
                  👋
                </span>
                ,
                <br /> I’m Noble.
              </h1>
              <h2>A Full-Stack Engineer</h2>
            </div>

            <div className="typed-container">
              <span className="typed" ref={textRef} />
            </div>
            <GetInTouchBtn onClickHandler={openContact} />
            <Avatar
              loading="eager"
              fluid={query.file.childImageSharp.fluid}
              alt="Noble's Avatar"
            />
          </div>
          <Socials />
        </HeroContent>
      </MaxWidthLayout>
    </HeroContainer>
  );
};

export default Hero;

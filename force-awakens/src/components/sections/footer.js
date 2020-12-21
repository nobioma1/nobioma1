import React from "react";
import styled from "styled-components";

import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";
import ContactForm from "../contactForm";

const FooterContainer = styled(StyledSection)`
  p {
    &:last-child {
      text-align: center;
      font-size: 0.825rem;
      padding: 0.8rem 0;
    }
  }
`;

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 1rem 4rem 1rem;
`;

const Footer = () => {
  return (
    <div>
      <SectionTitle title="Let's Connect" color="#FFF" />
      <FooterContainer>
        <ContactContainer>
          <p>
            Hello, <br /> I'm really excited to connect with you.
            <span role="img" aria-label="dance">
              🕺🏻
            </span>
          </p>
          <ContactForm />
        </ContactContainer>
        <p>
          2019 - {new Date().getFullYear()} || Designed and built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Noble Obioma
        </p>
      </FooterContainer>
    </div>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

import GetInTouchBtn from "@shared/getInTouchBtn";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 1rem 4rem 1rem;

  p {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Footer = ({ isContactOpen, setContactOpen }) => {
  return (
    <div id="contact">
      <SectionTitle title="Let's Connect" color="#FFF" />
      <FooterContainer>
        <ContactContainer>
          {isContactOpen ? (
            <>
              <p>
                Hey, I'm really excited to connect with you.
                <span role="img" aria-label="dance">
                  🕺🏻
                </span>
              </p>
              <ContactForm closeForm={() => setContactOpen(false)} />
            </>
          ) : (
            <>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. dummy text ever since the 1500s. May the force be with
                you.
              </p>
              <GetInTouchBtn onClickHandler={() => setContactOpen(true)} />
            </>
          )}
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

import React, { useState } from "react";
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 1rem 4rem 1rem;

  section {
    width: 100%;
  }

  #contact-intro {
    display: ${({ contactForm }) => (contactForm ? "none" : "flex")};
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  #contact-form {
    display: ${({ contactForm }) => (contactForm ? "block" : "none")};
  }

  #thank-you {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    width: 15rem;
    background: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;

    h3 {
      font-size: 2.3rem;
      letter-spacing: 0.08em;
      font-style: italic;
      color: ${({ theme }) => theme.colors.maxBlueGreen};
    }
  }

  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 1s linear;
  }
`;

const Footer = ({ isContactOpen, setContactOpen }) => {
  const [formSuccess, setFormSuccess] = useState(false);
  const onFormSuccess = () => {
    setFormSuccess(true);
    setContactOpen(false);
    setTimeout(() => {
      setFormSuccess(false);
    }, 3500);
  };

  return (
    <div id="contact">
      <SectionTitle title="Let's Connect" color="#FFF" />
      <FooterContainer>
        <ContactContainer contactForm={isContactOpen}>
          <section
            id="contact-intro"
            className={formSuccess ? "hidden" : "visible"}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. dummy text ever since the 1500s. May the force be with
              you.
            </p>
            <GetInTouchBtn onClickHandler={() => setContactOpen(true)} />
          </section>
          <section
            id="contact-form"
            className={formSuccess ? "hidden" : "visible"}
          >
            <p>
              Hello, <br /> I'm really excited to connect with you.
              <span role="img" aria-label="dance">
                🕺🏻
              </span>
            </p>
            <ContactForm
              closeForm={() => setContactOpen(false)}
              onSuccess={onFormSuccess}
            />
          </section>
          <section
            id="thank-you"
            className={formSuccess ? "visible" : "hidden"}
          >
            <h3>Thank you!</h3>
          </section>
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

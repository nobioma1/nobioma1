import React from "react";
import styled from "styled-components";

import GetInTouchBtn from "@shared/getInTouchBtn";
import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 580px;
  margin: 0 auto;
  padding-bottom: 4rem;

  p {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <div id="contact">
      <SectionTitle title="Let's Connect" color="#FFF" />
      <StyledSection>
        <FooterContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. dummy text ever since the 1500s. May the force be with
            you.
          </p>
          <GetInTouchBtn />
        </FooterContainer>
      </StyledSection>
    </div>
  );
};

export default Footer;

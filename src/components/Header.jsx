import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HeaderContainer, Contact, Icon } from '../styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Contact>
        <Icon>
          <a href="https://twitter.com/nobleobioma_">
            <FaTwitter />
          </a>
        </Icon>
        <Icon>
          <a href="https://linkedin.com/in/noble-obioma-2aa883140">
            <FaLinkedin />
          </a>
        </Icon>
        <Icon>
          <a href="https://github.com/nobioma1">
            <FaGithub />
          </a>
        </Icon>
        <Icon>
          <a href="mailto:nobioma1@gmail.com">
            <FaEnvelope />
          </a>
        </Icon>
      </Contact>
    </HeaderContainer>
  );
};

export default Header;

import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { WiDaySunny, WiMoonAltWaxingCrescent4 } from 'react-icons/wi';
import { HeaderContainer, Contact, Icon, SwitchContainer } from '../styles';

const Header = props => {
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
      <SwitchContainer>
        <WiDaySunny onClick={() => props.selectMode('light')} />
        <WiMoonAltWaxingCrescent4 onClick={() => props.selectMode('dark')} />
      </SwitchContainer>
    </HeaderContainer>
  );
};

export default Header;

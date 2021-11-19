import React from 'react';
import styled from 'styled-components';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Button = styled.button`
  background-color: transparent;
  width: 30%;
  height: 80px;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  margin: 20px 0;
  font-size: 21px;
  font-weight: 700;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    a {
      color: #0F1624;
    }
  }
  @media all and (max-width: 768px) {
    width: 50%;
    height: 60px;
    font-size: 16px;
  }
`

const Hero = () => { 
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome! <br />
            I am Lucas Cisternas <br />
            Full Stack Developer
            {/* <span ref={el} ></span> */}
          </SectionTitle>
          <SectionText>
            Hello! This is my web portfolio. I am a full stack developer. Here you can find all my most recent works, see them live, and if you like, check the code. Have a nice day!
          </SectionText>
          <Button  ><a href="#!">¡ My CV !</a></Button>
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;
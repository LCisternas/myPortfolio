import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        My name is Lucas Cisternas Opazo, I am 22 years old and I currently live in Santiago, Chile. I fell in love with software development during the pandemic in 2020 and today I am a full stack developer. For me programming is like a super power and something that I am passionate about since we can create solutions and facilitate people's lives in different ways.
        Personally, I consider myself a very curious self-taught person for always knowing and learning more
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;

import React from "react";
import styled from "styled-components";
import largeArrows from "../largeArrows.svg";

const Container = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem;
`;

const Header = styled.span`
  color: white;
  font-size: 35px;
  margin: 0;
`;

const ParagraphsContainer = styled.div`
  height: 20vh;
  overflow-y: scroll;
  background: linear-gradient(to bottom, #3700c8, #0000051b);
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin: 0;
  padding-bottom: 20px;
  color: white;
  font-size: 16px;
`;

const DeclarativeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Declarative = styled.span`
  color: white;
  font-size: 18px;
`;

const Arrows = styled.img``;

function AboutUs() {
  return (
    <Container>
      <ParagraphsContainer>
        <Header>We are...</Header>
        <Paragraph>
          A full-funnel marketing, advertising and design company creating
          breakthrough ideas with unrivaled performance.
        </Paragraph>
        <Paragraph>
          Challenging convention, we put together a new team and way of working
          to decode the connections between consumers, creativity and commerce.
        </Paragraph>
      </ParagraphsContainer>
      <DeclarativeContainer>
        <Declarative>See what we do</Declarative>
        <Arrows src={largeArrows} />
      </DeclarativeContainer>
    </Container>
  );
}

export default AboutUs;

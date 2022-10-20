import React from "react";
import styled from "styled-components";
import largeArrows from "../largeArrows.svg";

const Container = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.5rem;
`;

const Header = styled.span`
  color: white;
  font-size: 35px;
`;

const ParagraphsContainer = styled.div`
  overflow-y: scroll;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 16px;
  padding-bottom: 10px;
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
        <Arrows src={largeArrows} style={{ marginBottom: "1rem" }} />
      </DeclarativeContainer>
    </Container>
  );
}

export default AboutUs;

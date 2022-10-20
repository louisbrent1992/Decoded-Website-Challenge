import React from "react";
import styled from "styled-components";
import largeArrows from "../largeArrows.svg";

const Container = styled.div`
  height: 27vh;
  text-align: start;
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
`;

const Header = styled.span`
  color: #e2e8f0;
  font-size: 32px;
`;

const ParagraphsContainer = styled.div`
  overflow-y: scroll;
`;

const Paragraph = styled.p`
  color: #e2e8f0;
  font-size: 16px;
  padding-bottom: 5px;
  margin-top: 0;
`;

const DeclarativeContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const Declarative = styled.span`
  color: #e2e8f0;
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

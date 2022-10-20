import React from "react";
import styled from "styled-components";
import { articles } from "../_Data";

const Container = styled.div`
  position: absolute;
  background-color: white;
  bottom: 0;
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const NewsContainer = styled.div`
  display: flex;
  gap: 1rem;
  white-space: nowrap;
  transform: translateX(100%);
  animation: scroll-left 10s linear infinite;

  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-150%);
    }
  }
`;

const Article = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
`;

const ArticleTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

function FooterSlider() {
  return (
    <Container>
      <NewsContainer>
        {articles.map((article) => (
          <Article key={article.id}>
            <ArticleTitle>{article.title}</ArticleTitle>
          </Article>
        ))}
      </NewsContainer>
    </Container>
  );
}

export default FooterSlider;

import React from "react";
import styled from "styled-components";
import { articles } from "../_Data";

const Container = styled.div`
  position: absolute;
  background-color: #e2e8f0;
  bottom: 0;
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const NewsContainer = styled.div`
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  transform: translateX(100%);
  animation: scroll-left 65s linear infinite;

  @keyframes scroll-left {
    0% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Article = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: flex-start;
`;

const ArticleTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  padding-right: 10px;
`;

const ArticleTag = styled.span`
  color: #f358a1;
  font-size: 16px;
`;

function FooterSlider() {
  return (
    <Container>
      <NewsContainer>
        {articles.map((article) => (
          <Article key={article.id}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleTag>{article.alt}</ArticleTag>
          </Article>
        ))}
      </NewsContainer>
    </Container>
  );
}

export default FooterSlider;

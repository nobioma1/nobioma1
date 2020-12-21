import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Loading from "@shared/loading";
import ArticleCard from "@components/articleCard";
import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";

const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .card {
    width: 100%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  .link {
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.08em;
    transition: 0.5s;

    &:hover {
      color: dodgerblue;
    }
  }

  div {
    a {
      color: white;
      text-decoration: none;
      margin: 10px 0;
      font-size: 1em;

      &:hover {
        color: dodgerblue;
      }
    }
  }
`;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetch(
          "https://dev.to/api/articles?username=nobleobioma"
        );
        setArticles(await data.json());
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError("Sorry, Something went wrong fetching articles...");
      }
    };

    getArticles();
  }, []);

  const articlesList = articles.slice(0, 5).map((article, index) => {
    return (
      <a
        key={`Link-${article.name}-${index}`}
        href={article.url}
        target="__blank"
        className="card"
      >
        <ArticleCard article={article} delay={parseInt(`${index}00`, 10)} />
      </a>
    );
  });

  return (
    <StyledSection id="articles">
      <SectionTitle title="Some Articles I've Written" color="#FFF" />
      <section>
        <ArticlesContainer>
          {error}
          {articlesList}
          {error ? "Go to Blog page" : "Click to see more articles on my Blog"}
          &rarr;
          {isLoading && <Loading />}
        </ArticlesContainer>
      </section>
    </StyledSection>
  );
};

export default Articles;

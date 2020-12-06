import React, { useState, useEffect } from "react";
import styled from "styled-components";

import devApi from "@api/dev";
import Loading from "@shared/loading";
import ArticleCard from "@components/articleCard";
import SectionTitle from "@shared/sectionTitle";
import { StyledSection } from "@styled/sections";

const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    width: 100%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  div {
    a {
      color: white;
      text-decoration: none;
      margin: 10px 0;
      font-size: 16px;

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
      setIsLoading(true);
      try {
        const { data } = await devApi.get("/articles?username=nobleobioma");
        setArticles(data);
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
          {(articles.length > 5 || error) && (
            <div>
              <a href="https://dev.to/nobleobioma">
                Click to see {error ? "articles" : "more"} &rarr;
              </a>
            </div>
          )}
          {isLoading && <Loading />}
        </ArticlesContainer>
      </section>
    </StyledSection>
  );
};

export default Articles;

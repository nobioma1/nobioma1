import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ArticleCard from '../components/Cards/ArticleCard';
import data from '../data';

const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  a {
    width: 100%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const Articles = () => {
  return (
    <Layout bg="#18171c" title="Articles" id="Articles" centerY>
      <ArticlesContainer>
        {data.articles.map((article, index) => {
          return (
            <a
              key={`Link-${article.name}-${index}`}
              href={article.link}
              target="__blank"
            >
              <ArticleCard {...article} delay={parseInt(`${index}00`, 10)} />
            </a>
          );
        })}
      </ArticlesContainer>
    </Layout>
  );
};

export default Articles;

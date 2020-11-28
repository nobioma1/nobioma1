import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ArticleCard from '../components/Cards/ArticleCard';
import useRequest from '../hooks/useRequest';

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
  const { doRequest, error } = useRequest({
    url: 'https://dev.to/api/articles?username=nobleobioma',
    method: 'get',
  });

  useEffect(() => {
    doRequest({
      onSuccess: (res) => setArticles(res),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Layout bg="#18171c" title="Articles" id="articles" centerY>
      <ArticlesContainer>
        {error}
        {articlesList}
        {(articles.length > 5 || error) && (
          <div>
            <a href="https://dev.to/nobleobioma">
              Click for more articles on DEV.to
            </a>
          </div>
        )}
      </ArticlesContainer>
    </Layout>
  );
};

export default Articles;

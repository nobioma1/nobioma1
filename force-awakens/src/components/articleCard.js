import React from "react";
import styled from "styled-components";
import { FaDev } from "react-icons/fa";
import dayjs from "dayjs";

const ArticleCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.spaceCadet};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  margin: 5px 0;
  min-height: 100px;
  border-radius: 3px;
  padding: 15px 10px;
  color: white;
  line-height: 1.5;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: center;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

const Footer = styled.div`
  width: 100%;

  p {
    color: rgb(116, 124, 133);
    font-size: 1em;
  }

  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0;
    right: 0;
    opacity: 0.3;
  }
`;

const ArticleCard = ({ article }) => {
  const { title, published_at, tags } = article;
  return (
    <ArticleCardContainer>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Footer>
        <p>Published: {dayjs(published_at).format("DD MMM, YYYY")}</p>
        <p>{tags}</p>
        <FaDev />
      </Footer>
    </ArticleCardContainer>
  );
};

export default ArticleCard;

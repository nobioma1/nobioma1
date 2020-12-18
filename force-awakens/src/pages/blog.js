import React from "react";
import SEO from "@components/seo";
import data from "../data";

const BlogPage = () => {
  return (
    <div>
      <SEO title="Blog" keywords={data.stack} />
      my blog
    </div>
  );
};

export default BlogPage;

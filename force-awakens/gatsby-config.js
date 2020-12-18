module.exports = {
  siteMetadata: {
    title: `Noble Obioma`,
    description: `A full-stack software engineer building high quality, scalable solutions for the web across a wide range of industries. My ultimate passion is building software and tackling new problems.`,
    author: `@nobooln`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@api": "src/api",
          "@components": "src/components",
          "@layouts": "src/components/layouts",
          "@sections": "src/components/sections",
          "@shared": "src/components/shared",
          "@styled": "src/components/styled",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1c2541`,
        theme_color: `#1c2541`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

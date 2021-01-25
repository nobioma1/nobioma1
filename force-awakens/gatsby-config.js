module.exports = {
  siteMetadata: {
    title: `Noble Obioma`,
    description: `Hello 👋, my name is Noble Obioma. I'm a full-stack software engineer, a lover of music, and a baby bassist. My ultimate passion is building software and tackling new problems.`,
    url: "https://www.nobleobioma.com",
    author: "@nobooln",
    image: `/preview.png`,
    keywords: [
      `Noble Obioma`,
      `Software Engineer`,
      `Full-Stack Engineer`,
      `Web Developer`,
    ],
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
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
      },
    },
  ],
};

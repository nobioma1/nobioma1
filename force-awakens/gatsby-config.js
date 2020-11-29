module.exports = {
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};

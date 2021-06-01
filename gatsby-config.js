module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: false
      }
    },
  ],
  flags: {
    DEV_SSR: false,
  }
};

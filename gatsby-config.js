module.exports = {
  siteMetadata: {
    title: `Varun Sindwani`,
    description: `The Personal Website of Varun Sindwani`,
    author: `Varun Sindwani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `com.sindwani`,
        short_name: `com.sindwani`,
        start_url: `/`,
        icon: `src/assets/icons/images.png`,
      }, 
    },
    `gatsby-plugin-styled-components`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        purgeOnly : ['src/css/style.css'],
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}

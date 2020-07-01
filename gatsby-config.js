module.exports = {
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/styles/index.scss"],
     },
   },
  ],
 }

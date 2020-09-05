module.exports = {
  siteMetadata: {
    title: "Anna Theodorides",
    siteUrl: "https://www.annatheo.fr",
    description:
      "Anna Theodorides vous offre une visite vivante des objets d’art à la lumière des enjeux du présent.",
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/styles/index.scss"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-soundcloud",
            options: {
              width: 800, // default is "100%"
              height: 500, // default is 300
              color: "#ff00ff", // default is #ff5500
              autoplay: false, // default is false
            },
          },
        ],
      },
    },
  ],
}

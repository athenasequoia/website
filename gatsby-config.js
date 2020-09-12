module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet-async`,

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
              width: 700,
              height: 500,
              color: "#ff5500",
              autoplay: false, // default is false
            },
          },
        ],
      },
    },
  ],
}

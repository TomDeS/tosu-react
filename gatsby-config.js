module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tosu.be`,
        short_name: `t.`,
        description: `Cool tools`,
        lang: `en`,
        display: `standalone`,
        icon: `./static/img/t.png`,
        start_url: `/`,
        background_color: `#202b38`,
        theme_color: `#dbdbdb`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

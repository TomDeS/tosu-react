module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },

    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tosu.be',
        short_name: 'tosu',
        description: 'Cool tools',
        lang: 'en',
        display: 'standalone',
        icon: './static/img/t.png',
        start_url: '/',
        background_color: '#202b38',
        theme_color: '#202b38',
      },
    },
    'gatsby-plugin-offline',
  ],
}

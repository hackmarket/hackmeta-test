module.exports = {
  siteMetadata: {
    title: '핵메타 배그핵 서든핵 옵치핵 최저가보장',
    author: 'HackMeta',
    description: '배그핵.서든핵.옵치핵.에이펙스핵.발로란트핵.아크핵.롤헬퍼 게임계정 국내 최저가 보장',
    keyword:'배그 핵,서든 핵,옵치 핵,배그핵마켓,서든 핵메타,옵치핵구매,배그월핵,서든월핵,너지몰,카카오샵,핵마트'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

const { WATHEIA_HOME, WATHEIA_BLOG, MICRO_NEWS } = process.env
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})
const withPlugins = require("next-compose-plugins")

const plugins = [withNx, withBundleAnalyzer]

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    domains: [
      "watheia.app",
      "static.bit.dev",
      "tailwindui.com",
      "cdn.watheia.org",
      "images.unsplash.com",
      "www.datocms-assets.com",
      "a.storyblok.com",
      "images.ctfassets.net",
      "images.prismic.io",
      "cdn.aglty.io",
      "localhost" // For Strapi
    ],
    imageSizes: [24, 64, 300]
  },

  // // Setup rewrites
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: `/:path*`
  //     },
  //     {
  //       source: "/home",
  //       destination: `${WATHEIA_HOME}/home`
  //     },
  //     {
  //       source: "/home/:path*",
  //       destination: `${WATHEIA_HOME}/home/:path*`
  //     },
  //     {
  //       source: "/blog",
  //       destination: `${WATHEIA_BLOG}/blog`
  //     },
  //     {
  //       source: "/blog/:path*",
  //       destination: `${WATHEIA_BLOG}/blog/:path*`
  //     },
  //     {
  //       source: "/news",
  //       destination: `${MICRO_NEWS}/news`
  //     },
  //     {
  //       source: "/news/:path*",
  //       destination: `${MICRO_NEWS}/news/:path*`
  //     }
  //   ]
  // },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/",
        permanent: false
      }
    ]
  }
}

module.exports = withPlugins(plugins, nextConfig)
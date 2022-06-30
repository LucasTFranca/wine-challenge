/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line no-unused-vars
const withTM = require('next-transpile-modules')([

])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ['jsx', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  images: {
    domains: ['https://www.wine.com.br', 'www.wine.com.br']
  }
})

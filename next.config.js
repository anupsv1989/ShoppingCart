const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

/**
 * withLess is added because we have imported antd.less instead of antd.css
 * antd.css also can be used instead of antd.less
 */
const withLess = require('@zeit/next-less');

module.exports = withCSS(withLess(withSass({
    lessLoaderOptions: {
        javascriptEnabled: true
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        return config;
    }
})));
const path = require("path");
const { startDevServer } = require("@cypress/webpack-dev-server");
const findReactScriptsWebpackConfig = require("@cypress/react/plugins/react-scripts/findReactScriptsWebpackConfig");

// This injector works just like "@cypress/react/plugins/react-scripts"
// except that this allows us to edit the webpack config.
const injectDevServer = (on, config) => {
    on("dev-server:start", async (options) => {
        const webpackConfig = findReactScriptsWebpackConfig(config);

        webpackConfig.resolve.alias = {
            ...webpackConfig.resolve.alias,
            "~": path.resolve(__dirname, "../../src"),
        };

        return startDevServer({ options, webpackConfig });
    });

    config.env.reactDevtools = true;

    return config;
};

module.exports = (on, config) => {
    injectDevServer(on, config);
    return config;
};

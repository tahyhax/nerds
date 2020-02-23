const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        swiper: "./src/js/import/pages/index.js",
        catalog: "./src/js/import/pages/catalog.js"
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                },
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules\/(?!(@glidejs|nouislider)\/).*/],
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", {modules: false}]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components")
        }
    }
};

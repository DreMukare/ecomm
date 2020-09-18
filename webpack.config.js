const path = require("path");
const uglifyJSPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/index.js",
        search: "./src/search.js",
        dashboard: "./src/dashboard.js"
    },
    output: {
        // globalObject: "this",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer : {
        contentBase : path.join(__dirname, "dist"),
        // path: 9000
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new uglifyJSPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
    ]
}
}
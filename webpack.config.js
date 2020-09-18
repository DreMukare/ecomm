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
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new uglifyJSPlugin()]
    },
    devServer : {
        contentBase : path.join(__dirname, "dist"),
        path: 9000
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
    //         {
    //             test: /\.html$/,
    //             use: [
    //                 {
    //                     loader: "html-loader",
    //                     options: {minimize : true}
    //                 }
    //             ]
    //         },
    //         {
    //             test: /\.(png|svg|jpg|gif)/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.scss$/,
    //             use : [
    //                 "css-loader",
    //                 "sass-loader"
    //             ]
    //         }
    //     ]
    // },
    // plugins: [
    //   new HtmlWebPackPlugin({
    //       template: "./src/index.html",
    //       filename: "./index.html"
    //   }),
    //   new MiniCssExtractPlugin({
    //       filename: "[name].css",
    //       chunkFilename: "[id].css"
    //   })  
    ]
}
}
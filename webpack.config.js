const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        // globalObject: "this",
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
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
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry :  "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                loaders: ["html-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "assets"
                }
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        template: "./src/home.html"
    })]
}


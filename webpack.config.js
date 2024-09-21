import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4)$/i,
                type: "asset/resource", // This is the modern alternative to file-loader
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // Add this rule
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        static: path.join(process.cwd(), "dist"),
        compress: true,
        port: 3000,
    },
};

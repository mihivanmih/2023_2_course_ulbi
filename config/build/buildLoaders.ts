import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                        },
                    },
                },
                "sass-loader",
            ],
        }

    // Если не использовать ts - то для работы реакта нужен babel-loader
    const tsLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        tsLoader,
        cssLoader
    ]
}
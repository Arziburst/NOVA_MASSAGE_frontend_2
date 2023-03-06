// Core
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const loadCss = ({ sourceMap }: { sourceMap: boolean }) => ({
    loader:  'css-loader',
    options: {
        sourceMap,
    },
});

export const loadDevCss = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    loadCss({ sourceMap: false }),
                    'postcss-loader',
                ],
            },
        ],
    },
});

export const loadProdCss = (): Configuration => ({
    module: {
        rules: [
            {
                test: /.css$/,
                use:  [
                    MiniCssExtractPlugin.loader,
                    loadCss({ sourceMap: false }),
                    'postcss-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [ new CssMinimizerPlugin() ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      '[name].[contenthash:5].css',
            chunkFilename: '[name].[contenthash:3].css',
        }),
    ],
});

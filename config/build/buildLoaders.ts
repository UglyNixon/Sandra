import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options:BuildOptions):webpack.RuleSetRule[] {
    // без ts использовать babel
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['en', 'lv', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],

                ],
            },
        },
    };
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath:string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    },

                },

            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    return [
        babelLoader, typescriptLoader, svgLoader, cssLoader, fileLoader,
    ];
}

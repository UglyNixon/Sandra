import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssloaders';

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
    const cssLoader = buildCssLoader(options.isDev);

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
        test: /\.(png|jpe?g|jpg|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    // const imgAsset = {
    //     test: /\.(?:|gif|png|jpg)$/,
    //     type: 'asset/resource',
    //     generator: {
    //         filename:
    //             () => (options.isDev ? 'shared/assets/img/[name][ext]' : 'img/[name].[contenthash][ext]'),
    //     },
    // };

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        fileLoader,
        svgLoader,
        // imgAsset,

    ];
}

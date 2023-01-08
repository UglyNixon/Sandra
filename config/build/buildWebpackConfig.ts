import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig (options:BuildOptions):webpack.Configuration{
    const {mode,paths,isDev}=options
 return {
     mode:mode,
     entry : paths.entry,
     devtool: isDev? 'inline-source-map':undefined,
     devServer:isDev? buildDevServer(options):undefined,
     output: {
         filename:'[name].[contenthash].js',
         path:paths.build,
         clean:true
     },
     module: {
         rules: buildLoaders(options)
     },
     resolve: buildResolvers(),
     plugins: buildPlugins(paths),
 }
}


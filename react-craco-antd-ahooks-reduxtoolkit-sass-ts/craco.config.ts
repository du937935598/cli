import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sassResourcesLoader = require("craco-sass-resources-loader");
// const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pathResolve = (pathUrl: any) => path.join(__dirname, pathUrl)

module.exports = {
	webpack: {
		// plugins: new SimpleProgressWebpackPlugin(),
		// alias: {
		// 	'@': pathResolve('src'),
		// 	'@unit': pathResolve('./src/unit'),
		// 	'@store': pathResolve('./src/store')
		// },
		// configure: (webpackConfig,{env,paths}) => {
		// 	paths.appPath='public',
		// 	paths.appBuild = 'dist',
		// 	webpackConfig.output = {
		// 		...webpackConfig.output,
		// 		path: path.resolve(__dirname, 'dist'),
		// 		publicPath: '/'
		// 	}
		// 	return webpackConfig;
		// }
	},
	plugins: [{
		plugin: sassResourcesLoader,
		options: {
			resources: './src/assets/scss/index.scss'
		}
	}],
	// devServer:{
	// 	proxy:{
	// 	  '/api':{
	// 		target:'https://music.163.com',
	// 		changeOrigin: true,
	// 		secure:false
	// 	  }
	// 	}
	//   }
}

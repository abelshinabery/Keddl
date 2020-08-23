const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		hot: true,
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				secure: false
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin ({
			template: 'src/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.s?[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(js)$/,
				use: ['babel-loader']
			}
		],
	}
};
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const JavascriptConfig = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader"
	}
};

const SassConfig = {
	test: /\.(sass|scss)$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader
		},
		"css-loader",
		"postcss-loader",
		"sass-loader",
	]
};

const VueConfig = {
	test: /\.vue$/,
	loader: 'vue-loader'
};

const frontend = {
	entry: ["./frontend/scripts/main.js", "./frontend/styles/main.scss"],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "frontend/dist")
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
	},
	module: {
		rules: [
			JavascriptConfig,
			SassConfig,
			VueConfig
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new VueLoaderPlugin()
	],
	watch: true
}

module.exports = [frontend];

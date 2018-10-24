
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
	exclude: "/node_modules/",
	loader: 'vue-loader'
};


module.exports = {
	javascript_config: JavascriptConfig,
	sass_config: SassConfig,
	vue_config: VueConfig
};
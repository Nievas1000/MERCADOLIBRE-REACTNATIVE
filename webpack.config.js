const path = require('path'); //eslint-disable-line
const createExpoWebpackConfigAsync = require('@expo/webpack-config'); //eslint-disable-line

module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(env, argv);

	config.module.rules.push({
		test: /\.js$/,
		loader: 'babel-loader',
		include: [path.join(__dirname, 'node_modules/react-native-vector-icons')],
	});

	return config;
};

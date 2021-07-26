const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@App": path.resolve(__dirname, "src/"),
			"@Components": path.resolve(__dirname, "src/components"),
		},
	},
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
};
const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@App": path.resolve(__dirname, "src/"),
			"@Components": path.resolve(__dirname, "src/components"),
			"@Styles": path.resolve(__dirname, "src/styles"),
			"@Helpers": path.resolve(__dirname, "src/helpers"),
		},
	},
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
};
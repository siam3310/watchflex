module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
			  protocol: "https",
			  hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**"
			}
		],
	},
	env: {
	  BASE_URL: process.env.BASE_URL,
	},
}
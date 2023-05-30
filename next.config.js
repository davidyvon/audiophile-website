/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a.storyblok.com',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}

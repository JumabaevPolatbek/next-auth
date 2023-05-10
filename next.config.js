/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['https://alltor.me'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		formats: ['image/webp', 'image/avif'],
	},
};

module.exports = {
	...nextConfig,
};

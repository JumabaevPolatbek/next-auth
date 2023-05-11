/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
// 		domains:['**']
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
// 		formats: ['image/webp', 'image/avif'],
	},
};

module.exports = {
	...nextConfig,
};

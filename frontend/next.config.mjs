const backendUrl = process.env.BACKEND_URL;

const nextConfig = {
  async rewrites() {
    if (!backendUrl) {
      return [];
    }

    return [
      {
        source: '/api/contact',
        destination: `${backendUrl.replace(/\/$/, '')}/api/contact`,
      },
    ];
  },

  typedRoutes: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
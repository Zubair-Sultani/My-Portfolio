const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: `${process.env.BACKEND_URL || 'http://localhost:4000'}/api/contact`
      }
    ];
  },
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;

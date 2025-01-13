/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: '50mb'
      }
    },
    serverExternalPackages: ['pdf-parse'],
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*'
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS'
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization'
            }
          ]
        }
      ];
    }
  };
  
  module.exports = nextConfig;
  
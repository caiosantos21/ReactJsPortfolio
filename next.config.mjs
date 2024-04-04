/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.tcdn.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.tedcamisas.com.br',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig

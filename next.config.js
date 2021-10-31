module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: 'https://nutri-diary2.vercel.app/:path*',
      },
    ]
  },
  reactStrictMode: true,
  env: {
    BASE_URL: "https://nutri-diary2.vercel.app"
    // BASE_URL: "http://localhost:3000"
  }
}
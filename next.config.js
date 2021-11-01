module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  development: {
      client: 'sqlite',
      connection: {
        filename: 'db.db'
      }
    },
  reactStrictMode: true,
  env: {
    
    BASE_URL: "https://nutri-diary2.vercel.app",
    // BASE_URL: "http://localhost:3000",
    MONGODB_URI: "mongodb+srv://dbUser:dbUserPassword@cluster0.lbqvl.mongodb.net/nutri-diary"
  }
}
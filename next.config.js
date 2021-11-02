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
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
        ]
      }
    ]
  },
  reactStrictMode: true,
  env: {
    // BASE_URL: "https://nutri-diary2.vercel.app",
    BASE_URL: "http://localhost:3000",
    MONGODB_URI: "mongodb+srv://dbUser:dbUserPassword@cluster0.lbqvl.mongodb.net/nutri-diary",
    AUTH0_SECRET:'c2c9d231d92d6600fb2c723d05abd6a97c205b3f62d97604eeb02da71b525ff3',
    AUTH0_BASE_URL:'http://localhost:3000',
    // AUTH0_BASE_URL: "https://nutri-diary2.vercel.app",
    AUTH0_ISSUER_BASE_URL:'https://dev-j2t8o429.us.auth0.com',
    AUTH0_CLIENT_ID:'SKlHjNnC58dabtDnPh75ytk8k3fgxb43',
    AUTH0_CLIENT_SECRET:'eFeUD37yhwzOzGExMxq69FLtudDlhyJAYwZjtpJkHvTALedqvBkBXSIlYywzWipU'
  }
}
import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: "c2c9d231d92d6600fb2c723d05abd6a97c205b3f62d97604eeb02da71b525ff3",
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
})

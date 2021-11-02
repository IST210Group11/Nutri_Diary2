import { handleAuth } from '@auth0/nextjs-auth0'
import auth0 from '../../../utils/auth.ts'

require("dotenv").config();

export default auth0.handleAuth();
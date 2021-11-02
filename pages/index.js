import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Grid, ThemeProvider} from "@mui/material";
import Navbar from "../components/base/Navbar";
import Root from '../components/base/Root'
import TabProvider from "../components/base/TabProvider";
import {theme} from "../theme";
import {useEffect} from "react";
import ApiProvider from "../components/base/ApiProvider";
import {useUser, WithPageAuthRequired, withPageAuthRequired} from '@auth0/nextjs-auth0';
import UserProvider from '../components/base/UserProvider'
import SidebarProvider from "../components/base/SidebarProvider";

export default function Home() {
    const { user } = useUser()

    return (
        <ThemeProvider theme={theme}>
            <ApiProvider>
                <SidebarProvider>
                    <UserProvider>
                        <Root />
                    </UserProvider>
                </SidebarProvider>
            </ApiProvider>
        </ThemeProvider>
    )
}

// export default function Index() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div>
//         Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
//       </div>
//     );
//   }

//   return <a href="/api/auth/login">Login</a>;
// }
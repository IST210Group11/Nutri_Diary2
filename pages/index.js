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

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <ApiProvider>
                <TabProvider>
                    <Navbar />
                    <Root />
                </TabProvider>
            </ApiProvider>
        </ThemeProvider>
    )
}

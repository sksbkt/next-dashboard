import React from "react";
import scss from './Layout.module.scss';
import { useSession } from 'next-auth/react';
import Head from "next/head";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

const Layout = (props: any) => {
    const { data: session } = useSession();
    return (
        <>
            <Head>
                <title>Data dashboard</title>
                <meta name="description" content="Data dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={scss.layout}
                style={{ padding: session ? "0 24px 90px 80px" : 0 }}
            >
                {session && <SideMenu />}
                {props.children}
                <Footer />
            </main >
        </>
    );
};

export default Layout;

import React from "react";
import scss from './Layout.module.scss';
import { useSession } from 'next-auth/react';
import SideMenu from "@/components/SideMenu";
import Head from "next/head";

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
            <main className={scss.layout}>
                {session && <SideMenu />}
                {props.children}
            </main >
        </>
    );
};

export default Layout;

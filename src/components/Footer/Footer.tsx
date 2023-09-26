import React from "react";

import { Button, Paper, styled, useTheme } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

import Link from 'next/link';

import scss from './Footer.module.scss'
import { LINKS } from "@/helper/Util";
import signin from "@/pages/auth/signin";

const Footer = () => {
    const { data: session } = useSession();
    const theme = useTheme();

    const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary}
    `;

    return (
        <footer className={scss.footer}>
            <Paper sx={{ width: '100%' }} color={"#262626"}>
                <ul role="menu">
                    <li>
                        <FooterLink href={LINKS.root}>Home</FooterLink>
                    </li>
                    <li>
                        <FooterLink href={LINKS.data}>Data</FooterLink>
                    </li>
                    <li>
                        <FooterLink href={LINKS.profile}>Profile</FooterLink>
                    </li>
                    <li>
                        <FooterLink href={LINKS.settings}>Settings</FooterLink>
                    </li>
                    <li>
                        <FooterLink href={LINKS.terms}>Terms and condition</FooterLink>
                    </li>
                    <li>
                        <FooterLink href={LINKS.accessability}>Accessability statement</FooterLink>
                    </li>
                    <Button
                        variant="text"
                        color={session ? "error" : "success"}
                        onClick={() => (session ? signOut() : signIn())}
                    >
                        {session ? 'Sign out' : 'Sign in'}
                    </Button>
                </ul>
            </Paper>
        </footer>
    );
};

export default Footer;

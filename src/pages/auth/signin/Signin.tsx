import React from "react";
import { useSession } from 'next-auth/react'
import { Box } from "@mui/material";
import Login from "@/components/Login";

function SignIn() {
    const { data: session } = useSession();
    console.log('Called');

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <h2>{session ? "thank you for logging in" : "please log in"}</h2>
        <Login />
    </Box>;
}

export default SignIn;

import { Avatar, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
    const { data: session } = useSession();
    if (session) {
        return <>
            <p>Signed in as {session?.user?.email}</p>
            <Button
                variant="contained"
                color="error"
                onClick={() => signOut()}
            >Sign out</Button>
        </>
    }
    return <>
        Please log in<br />
        <Button variant="contained" color="success" onClick={() => signIn()}>Sign in</Button>
    </>;
};

export default Login;
import { formValidation, validationType } from "@/helper/Util";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const ProfileComponent = () => {
    const { data: session } = useSession();

    const names = session?.user?.name ? session.user.name.split(" ") : [];

    const firstName = names[0];
    const lastName = names.length > 1 ? names[names.length - 1] : '';
    const emailAddress = session?.user?.email;

    const [formData, setFormData] = useState({
        firstName: firstName,
        lastName: lastName,
        email: emailAddress,
        password: '',
        confirmPassword: '',
        receiveEmails: false
    });


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;

        setFormData(
            (prevState: any) => ({
                ...prevState,
                [name]: name === "receiveEmails" ? checked : value
            })
        )

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

    }

    const validateField = (event: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | any) => {
        console.log(event.target);

    }

    return (
        <>
            <h1>
                Profile
            </h1>
            <Typography variant={"h4"} sx={{ paddingBottom: 4 }}>
                Hey {session ? session?.user?.name : "Guest"} welcome to your profile
            </Typography>
            <Paper sx={{ padding: "1rem 2rem" }} >
                <Grid container justifyContent={"center"}>
                    <Grid item xs={12} sm={8} md={6}>
                        <Box>
                            <Avatar
                                sx={{
                                    height: 100,
                                    width: 100,
                                    marginBottom: 2
                                }}
                                src={session?.user?.image as string}
                            />
                        </Box>
                        <form
                            onSubmit={handleSubmit}
                            style={{ maxWidth: 600, margin: "0 auto" }}
                            autoComplete="off"
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label={'first name'}
                                        name={'firstName'}
                                        value={formData.firstName}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label={'last name'}
                                        name={'lastName'}
                                        value={formData.lastName}
                                        onChange={handleFormChange}
                                        onBlur={validateField}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="email"
                                        label={'email'}
                                        name={'email'}
                                        value={formData.email}
                                        onChange={handleFormChange}

                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        label={'password'}
                                        name={'password'}
                                        value={formData.password}
                                        onChange={handleFormChange}

                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        label={'confirm password'}
                                        name={'confirmPassword'}
                                        value={formData.confirmPassword}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControlLabel
                                        label={'Receive sales analytics emails'}
                                        control={
                                            <Checkbox
                                                name="receiveEmails"
                                                checked={formData.receiveEmails}
                                                onChange={handleFormChange}
                                                color={'primary'}
                                            />
                                        }
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <Button type={"submit"} variant={"contained"} color={"primary"}>
                                        Save changes
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default ProfileComponent;

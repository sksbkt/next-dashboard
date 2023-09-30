import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

const ProfileComponent = () => {
    const { data: session } = useSession();
    const handleSubmit = () => {

    }
    const handleFormChange = () => {

    }

    const formData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        receiveEmails: false
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

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label={'email'}
                                        name={'email'}
                                        value={formData.email}
                                        onChange={handleFormChange}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label={'password'}
                                        name={'password'}
                                        value={formData.password}
                                        onChange={handleFormChange}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label={'password'}
                                        name={'password'}
                                        value={formData.password}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
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

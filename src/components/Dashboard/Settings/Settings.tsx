import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

const SettingsComponent = () => {

    const [showRevenue, setShowRevenue] = useState(true);
    const [showProfit, setShowProfit] = useState(true);
    const [showOrders, setShowOrders] = useState(true);
    const [showCustomers, setShowCustomers] = useState(true);


    const handeShowRevenueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowRevenue(event.target.checked);
    }
    const handeShowProfitChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowProfit(event.target.checked);
    }
    const handeShowOrdersChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowOrders(event.target.checked);
    }
    const handeShowCustomersChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCustomers(event.target.checked);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // TODO: submit goes here
    }
    return <>
        <h1>Settings</h1>
        <Box>
            <Typography variant="h4" gutterBottom>
                dashboard features
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={showRevenue}
                                            onChange={handeShowRevenueChanged}
                                        />
                                    }
                                    label={"Revenue"}
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={showProfit}
                                            onChange={handeShowProfitChanged}
                                        />
                                    }
                                    label={"Profit"}
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={showOrders}
                                            onChange={handeShowOrdersChanged}
                                        />
                                    }
                                    label={"Orders"}
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={showCustomers}
                                            onChange={handeShowCustomersChanged}
                                        />
                                    }
                                    label={"Customers"}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Save settings
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </>;
};

export default SettingsComponent;

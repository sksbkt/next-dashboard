import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import Style from "./dashboard.module.scss";

const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={2} className={Style.topCardsContainer}>
                <Grid>
                    <Paper className={Style.dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={Style.dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={Style.dataCard}>xs=4</Paper>
                </Grid>
            </Grid>
            <Grid xs={12} item={true} marginY={2}>
                <Paper className={Style.dataCard}>xs=12</Paper>
            </Grid>
        </Box>
    )
};

export default Dashboard;

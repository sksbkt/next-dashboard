import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import Style from "./dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import DataCard from "@/components/Dashboard/DataCard/DataCard";

const Dashboard = () => {
    return (
        <Box>
            {/* Data ribbon */}
            <DataRibbon />
            {/* Transactions per day */}
            {/* Transactions doughnut */}
        </Box>
    )
};

export default Dashboard;

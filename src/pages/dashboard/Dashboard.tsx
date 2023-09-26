import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import Style from "./dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import DataCard from "@/components/Dashboard/DataCard/DataCard";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";

const Dashboard = () => {
    return (
        <Box>
            {/* Data ribbon */}
            <DataRibbon />
            {/* Transactions per day */}
            <TransactionsPerDay data={{ title: 'title', value: 'string', changeValue: 'ssss' }} />
            {/* Transactions doughnut */}
            <TransactionBottomRow />
        </Box>
    )
};

export default Dashboard;

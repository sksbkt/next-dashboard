import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import scss from './TransactionBottomRow.module.scss'
import DataChart from "@/components/DataChart";
import { doughnutChartData } from "@/components/mockData";

const TransactionsBottomRow = () => {
    return <Grid
        container
        className={scss.bottomRow}>
        <Grid>
            <Paper className={scss.dataCard}>
                <Typography>Transactions per user type</Typography>
                <DataChart type="doughnut" data={doughnutChartData} />
            </Paper>
        </Grid>
        <Grid>
            <Paper className={scss.dataCard}>
                <Typography>Transactions per user type</Typography>
                <DataChart type="doughnut" data={doughnutChartData} />
            </Paper>
        </Grid>
        <Grid>
            <Paper className={scss.dataCard}>
                <Typography>Transactions per user type</Typography>
                <DataChart type="doughnut" data={doughnutChartData} />
            </Paper>
        </Grid>
        <Grid>
            <Paper className={scss.dataCard}>
                <Typography>Transactions per user type</Typography>
                <DataChart type="doughnut" data={doughnutChartData} />
            </Paper>
        </Grid>



    </Grid>
};

export default TransactionsBottomRow;

import React from "react";

import { Card, Grid, Paper, Typography, useTheme } from '@mui/material'

import scss from './TransactionsPerDay.module.scss';
import DataChart from "@/components/DataChart";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
    title: string;
    value: string;
    changeValue: string;
}

export type TransactionsPerDayProps = {
    data: TransactionCardType
}

const TransactionsPerDay = (props: TransactionsPerDayProps) => {
    const { data } = props;
    const theme = useTheme();
    return <Grid
        container gap={2} className={scss.wrapper}
    >
        <Paper className={scss.transactions}>
            <div className={scss.chart}>
                <Typography>
                    Transactions per day
                </Typography>
                <DataChart type={"line"} data={lineChartData} />
            </div>
            <div className={scss.cardWrapper}>
                <Card className={scss.card} variant={"outlined"}>
                    <div className={scss.cardTitle}>
                        <Typography>
                            Total products
                        </Typography>
                    </div>
                    <div className={scss.cardValue}>
                        <Typography>
                            1.275
                        </Typography>
                        <Typography color={theme.palette.success.main} fontSize={14}>
                            428.7%
                        </Typography>
                    </div>
                </Card>
                <Card className={scss.card} variant={"outlined"}>
                    <div className={scss.cardTitle}>
                        <Typography>
                            Buy-to-details
                        </Typography>
                    </div>
                    <div className={scss.cardValue}>
                        <Typography>
                            1.275
                        </Typography>
                        <Typography color={theme.palette.success.main} fontSize={14}>
                            428.7%
                        </Typography>
                    </div>
                </Card>
                <Card className={scss.card} variant={"outlined"}>
                    <div className={scss.cardTitle}>
                        <Typography>
                            refunds
                        </Typography>
                    </div>
                    <div className={scss.cardValue}>
                        <Typography>
                            0
                        </Typography>
                        <Typography color={theme.palette.success.main} fontSize={14}>
                            0
                        </Typography>
                    </div>
                </Card>

            </div>

        </Paper>
    </Grid>
};

export default TransactionsPerDay;

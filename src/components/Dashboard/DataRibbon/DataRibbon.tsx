import DataCard from "@/components/Dashboard/DataCard";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";

import scss from './DataRibbon.module.scss'

const DataRibbon = () => {
    return <Grid
        container
        className={scss.dataRibbon}
        gap={2}
    >
        <Grid>
            <DataCard
                title={"Total sales"}
                value={"462"}
                description={"The totals of all Datasoft products in the current financial year"}
            />
        </Grid>
        <Grid>
            <DataCard
                title={"Total value"}
                value={"$26,112.23"}
                description={"The totals sale of the current financial year"}
            />
        </Grid>
        <Grid>
            <DataCard
                title={"Avg. order value"}
                value={"$124.12"}
                description={"The average order value for all sales in the current financial year"}
            />
        </Grid>
        <Grid>
            <DataCard
                title={"Conversion rate"}
                value={"0.03%"}
                description={"Number of pitches that become sales"}
            />
        </Grid>
    </Grid>
};

export default DataRibbon;

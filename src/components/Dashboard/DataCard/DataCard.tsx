import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import scss from './DataCard.module.scss'

export type DataCardProps = {
    title: string;
    value: string;
    description: string;
}
const DataCard = (props: DataCardProps) => {
    const { title, value, description } = props;
    return <Paper
        className={scss.dataCard}
    >
        <div
            className={scss.header}
        >
            <Typography fontSize={"h6"} color={"lightslategray"} noWrap>
                {title}
            </Typography>
            <Tooltip
                title={
                    <Typography fontSize={"h6"}>
                        {`${description} which is ${value}`}
                    </Typography>
                }
            >
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </Tooltip>
        </div>
        <Typography fontSize={"h4"}>
            {value}
        </Typography>
    </Paper>;
};

export default DataCard;

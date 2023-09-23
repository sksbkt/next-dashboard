import React, { useEffect, useRef } from "react";

import { ChartConfiguration, registerables } from "chart.js";

import { months } from '@/helper/Util'
import { Chart } from "chart.js";
import { darkOptions } from "@/components/Dashboard/DataChart/Themes";

const DataChart = (props: ChartConfiguration) => {
    const { data, options } = props;
    const chartRef = useRef<HTMLCanvasElement>(null);
    // ?TODO: WIP
    // const lable = months();

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                ...props,
                options: {
                    ...options,
                    ...darkOptions
                }
            });

            return () => {
                chart.destroy();
            };
        }
    }, [data]);


    return <canvas ref={chartRef} />
};

Chart.register(...registerables);
export default DataChart;

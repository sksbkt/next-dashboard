import { months } from '@/helper/Util'
import { duration } from '@mui/material'
import { ChartData } from 'chart.js'

// const labels = months({ count: 12 });

export const lineChartData: ChartData = {
    labels: months({ count: 12 }),
    datasets: [
        {
            label: 'Transactions',
            data: [65, 23, 51, 53, 43, 56, 113, 56, 64, 52, 45, 54],
            fill: true,
            borderColor: "rgb(75,192,192)",
            // ? change fill to false and remove this line if you don`t want to have background
            backgroundColor: "rgba(75,192,192,0.1)",
            tension: .1,

        }
    ]
}
export const doughnutChartData: ChartData = {
    labels: ['red', 'blue', 'yellow'],
    datasets: [
        {
            label: 'Transactions Dataset',
            data: [300, 50, 300],
            borderColor: [
                "rgb(255,137,168,0.8)",
                "rgb(178,3,106,0.8)",
                "rgb(165,7,42,0.8)"
            ],
            hoverOffset: 4,
            fill: true,
            backgroundColor: [
                "rgb(255,137,168,.5)",
                "rgb(178,3,106,.5)",
                "rgb(165,7,42,.5)"
            ],
        }
    ]
}

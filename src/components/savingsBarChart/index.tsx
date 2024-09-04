' use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale, ChartOptions } from 'chart.js';
import { barChartData } from '@/utils/helpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function SavingsBarChart() {

    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false, // Remove grid lines on X-axis
                },
            },
            y: {
                beginAtZero: true,
                max: 60000, // Y-axis maximum value
                ticks: {
                    stepSize: 10000, // Y-axis step size
                },
                grid: {
                    tickBorderDash: [5, 5], // Dashed lines on Y-axis
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        },
    };

    return (
        <div>
            <Bar data={barChartData} options={options} />
        </div>
    )
}

export default SavingsBarChart
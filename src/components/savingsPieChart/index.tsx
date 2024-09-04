'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { pieChartdata, pieOptions } from '@/utils/helpers';
import { plugins } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function SavingsPieChart() {

    const options: ChartOptions<'pie'> = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    generateLabels: function (chart) {
                        const data = chart.data;
                        if (data.labels && data.datasets.length) {
                            return data.labels.map((label, i) => {
                                const dataset = data.datasets[0];
                                const value = dataset.data[i] as number;
                                const total = dataset.data
                                    .filter((val): val is number => typeof val === 'number')
                                    .reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(2);

                                const backgroundColor = Array.isArray(dataset.backgroundColor)
                                    ? dataset.backgroundColor[i]
                                    : undefined;

                                return {
                                    text: `${value} ${label}`, // Value, percentage, and label
                                    fillStyle: backgroundColor,  // Safely use the color if defined
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw as number; // Ensure that `value` is treated as a number
                        const total = context.chart.data.datasets[0].data
                            .filter((val): val is number => typeof val === 'number') // Filter out non-number values
                            .reduce((acc, val) => acc + val, 0); // Sum up only the numbers

                        const percentage = ((value / total) * 100).toFixed(2); // Calculate the percentage
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            },
            // Custom plugin to display percentage on the chart
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data
                        .filter((val): val is number => typeof val === 'number')
                        .reduce((acc, val) => acc + val, 0);
                    const percentage = ((value as number / total) * 100).toFixed(2);
                    return `${percentage}%`;
                },
                color: '#000000',
                font: {
                    weight: 'normal',
                    size: 12,
                },
            }
        }
    };


    return (
        <div className='h-[25rem]'>
            <Pie data={pieChartdata} options={options} />
        </div>
    )
}

export default SavingsPieChart
import localFont from 'next/font/local';
import { Montserrat, Work_Sans } from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const workSans = localFont({
    src: [
        {
            path: "../fonts/WorkSans-Regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/WorkSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ]
});

export const poppins = localFont({
    src: [
        {
            path: "../fonts/Poppins-Regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Poppins-Italic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Poppins-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
    ],
});

export const lineChartData = {
    labels: ['1 Dec', '1 Jan', '1 Feb', '1 March'],
    datasets: [{
        label: 'Installment Amounts',
        data: [100000, 150000, 200000, 250000],
        borderColor: '#109CF1',
        fill: false,
    }]
}

export const pieOptions = {
    plugins: {
        legend: {
            position: 'right', // To align the legend to the right
        },
        tooltip: {
            callbacks: {
                label: function (context: any) {
                    const label = context.label || '';
                    const value = context.raw;
                    const total = context.chart._metasets[0].total;
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${label}: ${value} (${percentage}%)`;
                },
            },
        },
    },
};

export const pieChartdata = {
    labels: ['Sent', 'Opened', 'Spam', 'Deleted'],
    datasets: [
        {
            label: 'Total Invoices Sent',
            data: [150, 96, 56, 10],
            backgroundColor: [
                '#FF851B', // Color for Sent
                '#7FDBFF', // Color for Opened
                '#B10DC9', // Color for Spam
                '#FFDC00', // Color for Deleted
            ],
            hoverOffset: 4,
        },
    ],
}

export const barChartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'], // Months
    datasets: [
        {
            label: 'Savings', // Label for the data
            data: [10000, 20000, 35000, 50000, 45000, 30000, 15000], // The savings data
            backgroundColor: ['#007bff', '#ffc107', '#17a2b8', '#007bff', '#ffc107', '#17a2b8', '#007bff'], // Colors for each bar
            borderRadius: 5, // Rounded corners
        },
    ],
};
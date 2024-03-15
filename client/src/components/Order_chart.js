import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Data for the line chart
const data = [
    {
        name: 'Jan',
        Electronics : 100,
        Furniture : 20,
        IT_Equipment : 70,
        Office_Equipment : 40,
        Software : 100,
        Tools : 90
    },
    {
        name: 'Feb',
        Electronics: 10,
        Furniture: 30,
        IT_Equipment: 74,
        Office_Equipment: 24,
        Software: 105,
        Tools: 95
    },
    {
        name: 'Mar',
        Electronics: 300,
        Furniture: 205,
        IT_Equipment: 70,
        Office_Equipment: 420,
        Software: 20,
        Tools: 97
    },
    {
        name: 'Apr',
        Electronics: 100,
        Furniture: 25,
        IT_Equipment: 79,
        Office_Equipment: 42,
        Software: 70,
        Tools: 80
    },
    {
        name: 'May',
        Electronics: 100,
        Furniture: 205,
        IT_Equipment: 70,
        Office_Equipment: 220,
        Software: 20,
        Tools: 97
    },
    {
        name: 'Jun',
        Electronics: 300,
        Furniture: 25,
        IT_Equipment: 40,
        Office_Equipment: 420,
        Software: 208,
        Tools: 45
    },
    {
        name: 'Jul',
        Electronics: 30,
        Furniture: 205,
        IT_Equipment: 70,
        Office_Equipment: 40,
        Software: 20,
        Tools: 97
    },
    {
        name: 'Aug',
        Electronics: 300,
        Furniture: 56,
        IT_Equipment: 50,
        Office_Equipment: 420,
        Software: 90,
        Tools: 93
    },
    {
        name: 'Sep',
        Electronics: 100,
        Furniture: 205,
        IT_Equipment: 70,
        Office_Equipment: 80,
        Software: 20,
        Tools: 97
    },
    {
        name: 'Oct',
        Electronics: 600,
        Furniture: 25,
        IT_Equipment: 7,
        Office_Equipment: 40,
        Software: 40,
        Tools: 91
    },
    {
        name: 'Nov',
        Electronics: 300,
        Furniture: 205,
        IT_Equipment: 70,
        Office_Equipment: 420,
        Software: 20,
        Tools: 97
    },
    {
        name: 'Dec',
        Electronics: 30,
        Furniture: 25,
        IT_Equipment: 79,
        Office_Equipment: 50,
        Software: 100,
        Tools: 57
    }
]

export default function OrderChart(props) {
    return (
        // Container for the line chart
        <div className="order_chart-container h-[24rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            {/* Title for the chart */}
            <strong className="text-gray-700 text-2xl font-medium">Order Placed For - </strong>
            <div className="mt-3 w-full flex-1 text-xs">
                {/* ResponsiveContainer to adjust the chart size */}
                <ResponsiveContainer width="100%" height="100%">
                    {/* LineChart component from Recharts library */}
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        {/* XAxis component for the horizontal axis */}
                        <XAxis dataKey="name" />
                        {/* Tooltip to display data on hover */}
                        <Tooltip />
                        {/* Legend to display data keys */}
                        <Legend />
                        {/* CartesianGrid for grid lines */}
                        <CartesianGrid stroke="#f5f5f5" />
                        {/* Line components for each data series */}
                        <Line type="monotone" dataKey="Electronics" stroke="#1f2937" yAxisId={0} />
                        <Line type="monotone" dataKey="Furniture" stroke="#0891b2" yAxisId={1} />
                        <Line type="monotone" dataKey="IT_Equipment" stroke="#4f46e5" yAxisId={2} />
                        <Line type="monotone" dataKey="Office_Equipment" stroke="#2e1065" yAxisId={3} />
                        <Line type="monotone" dataKey="Software" stroke="#701a75" yAxisId={4} />
                        <Line type="monotone" dataKey="Tools" stroke="#1e40af" yAxisId={5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
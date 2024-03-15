import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
    { name: 'Electronics', value: 300 },
    { name: 'Furniture', value: 620 },
    { name: 'IT_Equipment', value: 210 },
    { name: 'Software', value: 310 },
    { name: 'Tools', value: 200 },
    { name: 'Office_Equipment', value: 700 },
]

// Constants for customizing label rendering
const RADIAN = Math.PI / 180; // Convert degree to radian
const COLORS = ['#1f2937', '#0891b2', '#4f46e5', '#2e1065', '#701a75', '#1e40af']; // Array of colors for the pie chart

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Calculate label radius
    const x = cx + radius * Math.cos(-midAngle * RADIAN); // Calculate x position
    const y = cy + radius * Math.sin(-midAngle * RADIAN); // Calculate y position

    // Return text element with percentage label
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export default function Product_chart() {
    return (
        <div className="product-chart w-full h-[24rem] bg-white p-4 rounded-md border border-gray-200 shadow-slate-300 shadow-md flex flex-col">
            <strong className="text-gray-700 text-2xl text-center font-medium">Products Analysis</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={500} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="45%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={105}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {/* Rendering cells with different colors */}
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
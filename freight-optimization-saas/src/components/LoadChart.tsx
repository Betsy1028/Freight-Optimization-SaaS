'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', optimized: 85, unoptimized: 45 },
  { month: 'Feb', optimized: 88, unoptimized: 52 },
  { month: 'Mar', optimized: 92, unoptimized: 48 },
  { month: 'Apr', optimized: 89, unoptimized: 61 },
  { month: 'May', optimized: 94, unoptimized: 55 },
  { month: 'Jun', optimized: 96, unoptimized: 67 },
];

export default function LoadChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Load Optimization Efficiency
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="optimized"
              stackId="1"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.6}
              name="Optimized Loads"
            />
            <Area
              type="monotone"
              dataKey="unoptimized"
              stackId="1"
              stroke="#EF4444"
              fill="#EF4444"
              fillOpacity={0.6}
              name="Unoptimized Loads"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
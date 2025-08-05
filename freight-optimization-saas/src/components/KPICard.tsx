import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'green' | 'yellow' | 'red';
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
};

export default function KPICard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  color 
}: KPICardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={clsx('p-3 rounded-full', colorClasses[color])}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        {changeType === 'increase' ? (
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 text-red-500" />
        )}
        <span className={clsx(
          'ml-1 text-sm font-medium',
          changeType === 'increase' ? 'text-green-500' : 'text-red-500'
        )}>
          {Math.abs(change)}%
        </span>
        <span className="ml-1 text-sm text-gray-500">vs last month</span>
      </div>
    </div>
  );
}
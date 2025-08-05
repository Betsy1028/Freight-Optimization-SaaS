import Layout from '@/components/Layout';
import KPICard from '@/components/KPICard';
import LoadChart from '@/components/LoadChart';
import {
  TruckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const kpis = [
    {
      title: 'Active Loads',
      value: '2,847',
      change: 12.5,
      changeType: 'increase' as const,
      icon: TruckIcon,
      color: 'blue' as const,
    },
    {
      title: 'Cost Savings',
      value: '$284K',
      change: 8.2,
      changeType: 'increase' as const,
      icon: CurrencyDollarIcon,
      color: 'green' as const,
    },
    {
      title: 'Avg Delivery Time',
      value: '4.2 days',
      change: 5.1,
      changeType: 'decrease' as const,
      icon: ClockIcon,
      color: 'yellow' as const,
    },
    {
      title: 'Optimization Rate',
      value: '94.2%',
      change: 3.8,
      changeType: 'increase' as const,
      icon: ChartBarIcon,
      color: 'blue' as const,
    },
  ];

  return (
    <Layout 
      title="Dashboard" 
      subtitle="Monitor your freight optimization performance"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LoadChart />
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Load Activities
          </h3>
          <div className="space-y-4">
            {[
              {
                id: 'LD-2024-001',
                route: 'Chicago → Dallas',
                status: 'Optimized',
                savings: '$2,450',
                time: '2 hours ago'
              },
              {
                id: 'LD-2024-002',
                route: 'Los Angeles → Phoenix',
                status: 'In Transit',
                savings: '$1,200',
                time: '4 hours ago'
              },
              {
                id: 'LD-2024-003',
                route: 'New York → Atlanta',
                status: 'Delivered',
                savings: '$3,100',
                time: '6 hours ago'
              },
            ].map((load) => (
              <div key={load.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{load.id}</p>
                  <p className="text-sm text-gray-600">{load.route}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">{load.savings}</p>
                  <p className="text-xs text-gray-500">{load.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
            <TruckIcon className="h-5 w-5 mr-2" />
            Create New Load
          </button>
          <button className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Run Optimization
          </button>
          <button className="flex items-center justify-center p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
            Generate Report
          </button>
        </div>
      </div>
    </Layout>
  );
}

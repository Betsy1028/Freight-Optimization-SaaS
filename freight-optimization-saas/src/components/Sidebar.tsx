'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  TruckIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  CogIcon,
  HomeIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Load Optimization', href: '/optimization', icon: CalculatorIcon },
  { name: 'Freight Analysis', href: '/analysis', icon: ChartBarIcon },
  { name: 'Fleet Management', href: '/fleet', icon: TruckIcon },
  { name: 'Reports', href: '/reports', icon: DocumentTextIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <TruckIcon className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">FreightOpt</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={clsx(
                  'mr-3 h-5 w-5',
                  isActive ? 'text-blue-700' : 'text-gray-400'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-sm font-medium text-white">BF</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Betsy Fernandez</p>
            <p className="text-xs text-gray-500">Logistics Strategist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
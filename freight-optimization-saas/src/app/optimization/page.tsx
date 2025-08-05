'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import {
  TruckIcon,
  MapPinIcon,
  ClockIcon,
  ScaleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface LoadData {
  id: string;
  origin: string;
  destination: string;
  weight: number;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
}

export default function LoadOptimization() {
  const [loads, setLoads] = useState<LoadData[]>([
    {
      id: 'LD-001',
      origin: 'Chicago, IL',
      destination: 'Dallas, TX',
      weight: 25000,
      deadline: '2024-01-15',
      priority: 'high'
    },
    {
      id: 'LD-002',
      origin: 'Los Angeles, CA',
      destination: 'Phoenix, AZ',
      weight: 18000,
      deadline: '2024-01-16',
      priority: 'medium'
    },
    {
      id: 'LD-003',
      origin: 'New York, NY',
      destination: 'Atlanta, GA',
      weight: 32000,
      deadline: '2024-01-17',
      priority: 'low'
    },
  ]);

  const [optimizationResults, setOptimizationResults] = useState<any[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const runOptimization = () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    setTimeout(() => {
      const results = [
        {
          route: 'Route A: Chicago → Dallas → Phoenix',
          loads: ['LD-001', 'LD-002'],
          efficiency: 94,
          savings: '$3,200',
          totalWeight: 43000,
          estimatedTime: '3.2 days'
        },
        {
          route: 'Route B: New York → Atlanta',
          loads: ['LD-003'],
          efficiency: 87,
          savings: '$1,800',
          totalWeight: 32000,
          estimatedTime: '2.1 days'
        }
      ];
      setOptimizationResults(results);
      setIsOptimizing(false);
    }, 2000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout 
      title="Load Optimization" 
      subtitle="Optimize load combinations for maximum efficiency"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Load Management */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Available Loads</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Add Load
              </button>
            </div>
            
            <div className="space-y-4">
              {loads.map((load) => (
                <div key={load.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{load.id}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(load.priority)}`}>
                      {load.priority}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {load.origin}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {load.destination}
                    </div>
                    <div className="flex items-center">
                      <ScaleIcon className="h-4 w-4 mr-1" />
                      {load.weight.toLocaleString()} lbs
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {load.deadline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Controls */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Optimization Priority
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Cost Reduction</option>
                  <option>Time Efficiency</option>
                  <option>Environmental Impact</option>
                  <option>Balanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Route Distance (miles)
                </label>
                <input 
                  type="number" 
                  defaultValue={1500}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <button 
                onClick={runOptimization}
                disabled={isOptimizing}
                className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isOptimizing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Optimizing...
                  </>
                ) : (
                  <>
                    <TruckIcon className="h-5 w-5 mr-2" />
                    Run Optimization
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Optimization Results */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Results</h3>
          
          {optimizationResults.length === 0 ? (
            <div className="text-center py-12">
              <TruckIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Run optimization to see suggested routes</p>
            </div>
          ) : (
            <div className="space-y-4">
              {optimizationResults.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{result.route}</h4>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-green-600">
                        {result.efficiency}% Efficient
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <div>Loads: {result.loads.join(', ')}</div>
                    <div>Savings: {result.savings}</div>
                    <div>Total Weight: {result.totalWeight.toLocaleString()} lbs</div>
                    <div>Est. Time: {result.estimatedTime}</div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Apply Route
                    </button>
                    <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Alerts & Recommendations */}
      {optimizationResults.length > 0 && (
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-5 w-5 text-amber-400 mr-2" />
            <div>
              <h4 className="text-sm font-medium text-amber-800">Optimization Recommendations</h4>
              <p className="text-sm text-amber-700 mt-1">
                Consider consolidating loads LD-001 and LD-002 for an additional 12% cost savings. 
                Delivery deadlines can still be met with this optimization.
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
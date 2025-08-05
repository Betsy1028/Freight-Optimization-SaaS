import Layout from '@/components/Layout';
import {
  TruckIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const fleetData = [
  {
    id: 'TRK-001',
    driver: 'John Smith',
    phone: '+1 555-0123',
    currentLoad: 'LD-2024-001',
    location: 'Chicago, IL',
    destination: 'Dallas, TX',
    status: 'in_transit',
    progress: 65,
    eta: '2024-01-15 14:30',
    capacity: 80000,
    currentWeight: 25000,
  },
  {
    id: 'TRK-002',
    driver: 'Maria Garcia',
    phone: '+1 555-0124',
    currentLoad: 'LD-2024-002',
    location: 'Los Angeles, CA',
    destination: 'Phoenix, AZ',
    status: 'loading',
    progress: 10,
    eta: '2024-01-16 09:00',
    capacity: 80000,
    currentWeight: 18000,
  },
  {
    id: 'TRK-003',
    driver: 'David Johnson',
    phone: '+1 555-0125',
    currentLoad: 'LD-2024-003',
    location: 'Atlanta, GA',
    destination: 'Miami, FL',
    status: 'delivered',
    progress: 100,
    eta: '2024-01-14 16:00',
    capacity: 80000,
    currentWeight: 0,
  },
  {
    id: 'TRK-004',
    driver: 'Sarah Wilson',
    phone: '+1 555-0126',
    currentLoad: null,
    location: 'Denver, CO',
    destination: null,
    status: 'available',
    progress: 0,
    eta: null,
    capacity: 80000,
    currentWeight: 0,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in_transit':
      return 'bg-blue-100 text-blue-800';
    case 'loading':
      return 'bg-yellow-100 text-yellow-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'available':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'in_transit':
      return <TruckIcon className="h-5 w-5 text-blue-500" />;
    case 'loading':
      return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
    case 'delivered':
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    case 'available':
      return <CheckCircleIcon className="h-5 w-5 text-gray-500" />;
    default:
      return <TruckIcon className="h-5 w-5 text-gray-500" />;
  }
};

export default function FleetManagement() {
  return (
    <Layout 
      title="Fleet Management" 
      subtitle="Monitor and manage your fleet operations in real-time"
    >
      {/* Fleet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <TruckIcon className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Vehicles</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Transit</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">20</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-2xl font-bold text-gray-900">20</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Maintenance</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Active Fleet</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Vehicle
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {fleetData.map((vehicle) => (
            <div key={vehicle.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(vehicle.status)}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{vehicle.id}</h4>
                    <p className="text-sm text-gray-600">{vehicle.driver}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vehicle.status)}`}>
                    {vehicle.status.replace('_', ' ')}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800">
                    <PhoneIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Current Location</p>
                  <div className="flex items-center mt-1">
                    <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                    <p className="text-sm text-gray-900">{vehicle.location}</p>
                  </div>
                </div>
                
                {vehicle.destination && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Destination</p>
                    <div className="flex items-center mt-1">
                      <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-900">{vehicle.destination}</p>
                    </div>
                  </div>
                )}
                
                {vehicle.eta && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">ETA</p>
                    <div className="flex items-center mt-1">
                      <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-900">{vehicle.eta}</p>
                    </div>
                  </div>
                )}
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Load Capacity</p>
                  <p className="text-sm text-gray-900 mt-1">
                    {vehicle.currentWeight.toLocaleString()} / {vehicle.capacity.toLocaleString()} lbs
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(vehicle.currentWeight / vehicle.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {vehicle.status === 'in_transit' && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-gray-900">{vehicle.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${vehicle.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {vehicle.currentLoad && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">
                    Current Load: {vehicle.currentLoad}
                  </p>
                  <div className="mt-2 flex space-x-3">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Track Load
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
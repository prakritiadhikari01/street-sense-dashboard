// Mock Firebase service structure for Traffix
// This demonstrates the data structure you would use with actual Firebase integration

export interface TrafficData {
  current_green: 'north' | 'south' | 'east' | 'west';
  last_updated: string;
  vehicle_counts: {
    north: VehicleCount;
    south: VehicleCount;
    east: VehicleCount;
    west: VehicleCount;
  };
  wait_times: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
  congestion_levels: {
    north: 'low' | 'medium' | 'high';
    south: 'low' | 'medium' | 'high';
    east: 'low' | 'medium' | 'high';
    west: 'low' | 'medium' | 'high';
  };
}

export interface VehicleCount {
  car: number;
  bike: number;
  truck: number;
  bus: number;
  total: number;
}

export interface TrafficLog {
  timestamp: string;
  green_direction: string;
  vehicle_counts: Record<string, number>;
  congestion_levels: Record<string, string>;
  decision_reason: string;
}

export interface CongestionHistory {
  direction: string;
  timestamp: string;
  score: number;
  wait_time: number;
  vehicle_count: number;
}

// Mock data for demonstration
export const mockTrafficData: TrafficData = {
  current_green: 'north',
  last_updated: new Date().toISOString(),
  vehicle_counts: {
    north: { car: 8, bike: 3, truck: 1, bus: 0, total: 12 },
    south: { car: 6, bike: 2, truck: 0, bus: 0, total: 8 },
    east: { car: 2, bike: 1, truck: 0, bus: 0, total: 3 },
    west: { car: 10, bike: 4, truck: 1, bus: 0, total: 15 }
  },
  wait_times: {
    north: 25,
    south: 145,
    east: 89,
    west: 203
  },
  congestion_levels: {
    north: 'high',
    south: 'medium',
    east: 'low',
    west: 'high'
  }
};

// Mock Firebase functions
export class FirebaseService {
  // Realtime Database operations
  static async updateTrafficData(data: Partial<TrafficData>) {
    console.log('Updating Realtime DB:', data);
    // In real implementation: firebase.database().ref('traffic_system').update(data)
  }

  static async listenToTrafficData(callback: (data: TrafficData) => void) {
    console.log('Listening to traffic data changes...');
    // In real implementation: firebase.database().ref('traffic_system').on('value', callback)
    // Mock real-time updates
    setInterval(() => {
      callback(mockTrafficData);
    }, 5000);
  }

  // Firestore operations
  static async addTrafficLog(log: TrafficLog) {
    console.log('Adding traffic log to Firestore:', log);
    // In real implementation: firebase.firestore().collection('traffic_logs').add(log)
  }

  static async getCongestionHistory(direction: string, hours: number = 24) {
    console.log(`Getting congestion history for ${direction} (${hours}h)`);
    // In real implementation: 
    // firebase.firestore().collection('congestion_history')
    //   .where('direction', '==', direction)
    //   .where('timestamp', '>=', startTime)
    //   .orderBy('timestamp', 'desc')
    //   .get()
    
    // Mock data
    return [];
  }

  static async getTrafficLogs(limit: number = 50) {
    console.log(`Getting latest ${limit} traffic logs`);
    // In real implementation:
    // firebase.firestore().collection('traffic_logs')
    //   .orderBy('timestamp', 'desc')
    //   .limit(limit)
    //   .get()
    
    // Mock data
    return [];
  }
}

// Export helper functions for data export
export const getCurrentTrafficData = async (): Promise<TrafficData> => {
  console.log('Getting current traffic data...');
  // In real implementation: return current state from Realtime DB
  return mockTrafficData;
};

export const getTrafficLogs = async (limit: number = 50): Promise<TrafficLog[]> => {
  console.log(`Getting latest ${limit} traffic logs`);
  // In real implementation: fetch from Firestore
  // Mock data for now
  return [
    {
      timestamp: new Date().toISOString(),
      green_direction: 'north',
      vehicle_counts: { north: 12, south: 8, east: 3, west: 15 },
      congestion_levels: { north: 'high', south: 'medium', east: 'low', west: 'high' },
      decision_reason: 'Maximum congestion in north direction'
    }
  ];
};

// Example usage in your React components:
/*
import { FirebaseService } from '@/services/firebaseService';

// In your component
useEffect(() => {
  const unsubscribe = FirebaseService.listenToTrafficData((data) => {
    setTrafficData(data);
  });
  
  return () => unsubscribe?.();
}, []);

// To add a log
const logTrafficEvent = async (event: TrafficLog) => {
  await FirebaseService.addTrafficLog(event);
};
*/

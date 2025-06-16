
import { getTrafficLogs, getCurrentTrafficData } from "@/services/firebaseService";

export const exportTrafficData = async () => {
  try {
    // Get current traffic data
    const currentData = await getCurrentTrafficData();
    
    // Get historical logs
    const logs = await getTrafficLogs();
    
    // Prepare export data
    const exportData = {
      exportDate: new Date().toISOString(),
      currentTrafficState: currentData,
      trafficLogs: logs,
      summary: {
        totalLogs: logs.length,
        exportedBy: "Traffix Dashboard",
        systemVersion: "1.0.0"
      }
    };
    
    // Convert to JSON
    const jsonData = JSON.stringify(exportData, null, 2);
    
    // Create blob and download
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `traffix-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    console.log('Traffic data exported successfully');
  } catch (error) {
    console.error('Error exporting data:', error);
  }
};

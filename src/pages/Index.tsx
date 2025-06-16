
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TrafficSummary } from "@/components/dashboard/TrafficSummary";
import { CongestionMonitor } from "@/components/dashboard/CongestionMonitor";
import { TrafficCharts } from "@/components/dashboard/TrafficCharts";
import { LogsSection } from "@/components/dashboard/LogsSection";
import { CameraFeed } from "@/components/ui/camera-feed";

const Index = () => {
  const currentGreen = "north";
  const directions = ["north", "south", "east", "west"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Live Traffic Summary */}
        <TrafficSummary />
        
        {/* Camera Feeds */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {directions.map((direction) => (
            <CameraFeed 
              key={direction}
              direction={direction}
              isActive={currentGreen === direction}
            />
          ))}
        </div>
        
        {/* Congestion Monitoring */}
        <CongestionMonitor />
        
        {/* Traffic Charts */}
        <TrafficCharts />
        
        {/* Logs */}
        <LogsSection />
      </div>
    </DashboardLayout>
  );
};

export default Index;

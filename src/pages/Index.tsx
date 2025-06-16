
import { MobileLayout } from "@/components/layout/MobileLayout";
import { TrafficSummary } from "@/components/dashboard/TrafficSummary";
import { CongestionMonitor } from "@/components/dashboard/CongestionMonitor";
import { TrafficCharts } from "@/components/dashboard/TrafficCharts";
import { LogsSection } from "@/components/dashboard/LogsSection";
import { CameraFeed } from "@/components/ui/camera-feed";

const Index = () => {
  const currentGreen = "north";
  const directions = ["north", "south", "east", "west"];

  return (
    <MobileLayout>
      <div className="space-y-4 max-w-7xl mx-auto">
        {/* Live Traffic Summary */}
        <TrafficSummary />
        
        {/* Camera Feeds - Mobile optimized grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
    </MobileLayout>
  );
};

export default Index;

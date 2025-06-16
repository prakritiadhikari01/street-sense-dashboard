
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TrafficSummary } from "@/components/dashboard/TrafficSummary";
import { CongestionMonitor } from "@/components/dashboard/CongestionMonitor";
import { TrafficCharts } from "@/components/dashboard/TrafficCharts";
import { LogsSection } from "@/components/dashboard/LogsSection";
import { ControlPanel } from "@/components/dashboard/ControlPanel";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Live Traffic Summary */}
        <TrafficSummary />
        
        {/* Congestion Monitoring */}
        <CongestionMonitor />
        
        {/* Traffic Charts */}
        <TrafficCharts />
        
        {/* Logs and Control */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <LogsSection />
          </div>
          <div className="xl:col-span-1">
            <ControlPanel />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

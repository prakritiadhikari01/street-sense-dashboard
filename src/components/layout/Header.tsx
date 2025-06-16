
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { exportTrafficData } from "@/utils/dataExport";

export function Header() {
  const handleExportData = () => {
    exportTrafficData();
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          <div>
            <h2 className="text-lg font-semibold text-foreground">Traffic Control Dashboard</h2>
            <p className="text-sm text-muted-foreground">Real-time monitoring and control</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportData}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Badge variant="outline" className="border-emerald-400 text-emerald-400">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            System Active
          </Badge>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleTimeString()}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

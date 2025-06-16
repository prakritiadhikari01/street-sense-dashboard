
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-slate-400 hover:text-white" />
          <div>
            <h2 className="text-lg font-semibold text-white">Traffic Control Dashboard</h2>
            <p className="text-sm text-slate-400">Real-time monitoring and control</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-emerald-400 text-emerald-400">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            System Active
          </Badge>
          <div className="text-sm text-slate-400">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </header>
  );
}

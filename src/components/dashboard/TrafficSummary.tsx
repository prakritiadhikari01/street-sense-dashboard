
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const trafficData = [
  {
    direction: "North",
    icon: ArrowUp,
    vehicles: 12,
    isActive: true,
    waitTime: 25,
    congestion: "high"
  },
  {
    direction: "South", 
    icon: ArrowDown,
    vehicles: 8,
    isActive: false,
    waitTime: 145,
    congestion: "medium"
  },
  {
    direction: "East",
    icon: ArrowRight,
    vehicles: 3,
    isActive: false,
    waitTime: 89,
    congestion: "low"
  },
  {
    direction: "West",
    icon: ArrowLeft,
    vehicles: 15,
    isActive: false,
    waitTime: 203,
    congestion: "high"
  }
];

const getCongestionColor = (level: string) => {
  switch (level) {
    case "high": return "text-red-400 bg-red-400/10 border-red-400";
    case "medium": return "text-amber-400 bg-amber-400/10 border-amber-400";
    case "low": return "text-emerald-400 bg-emerald-400/10 border-emerald-400";
    default: return "text-slate-400 bg-slate-400/10 border-slate-400";
  }
};

export function TrafficSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {trafficData.map((data) => {
        const Icon = data.icon;
        return (
          <Card key={data.direction} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2">
                  <Icon className="w-5 h-5" />
                  <span>{data.direction}</span>
                </CardTitle>
                {data.isActive && (
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Vehicles</span>
                <span className="text-2xl font-bold text-white">{data.vehicles}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Wait Time</span>
                <span className="text-sm font-medium text-slate-300">{data.waitTime}s</span>
              </div>
              <Badge 
                variant="outline" 
                className={`w-full justify-center ${getCongestionColor(data.congestion)}`}
              >
                {data.congestion.toUpperCase()}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

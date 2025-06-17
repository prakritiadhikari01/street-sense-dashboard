
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrafficLight } from "@/components/ui/traffic-light";
import { Clock, Car } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrafficSummary() {
  const currentGreen = "north";
  const directions = ["north", "south", "east", "west"];
  
  const trafficData = {
    north: { count: 12, waitTime: 45 },
    south: { count: 6, waitTime: 120 },
    east: { count: 3, waitTime: 180 },
    west: { count: 8, waitTime: 90 }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Traffix - Live Traffic Control
          </CardTitle>
          <Badge variant="outline" className="border-emerald-400 text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/50">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((direction) => (
            <div 
              key={direction} 
              className={cn(
                "flex flex-col items-center p-5 rounded-xl border-2 transition-all duration-300 hover:scale-105",
                "bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm",
                currentGreen === direction
                  ? "border-emerald-300/50 shadow-lg shadow-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20"
                  : "border-red-300/50 shadow-lg shadow-red-500/20 bg-red-50/30 dark:bg-red-950/20"
              )}
            >
              {/* Single Traffic Light Circle */}
              <TrafficLight 
                direction={direction}
                isActive={currentGreen === direction}
              />
              
              {/* Traffic Stats */}
              <div className="flex flex-col items-center space-y-3 mt-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-muted-foreground" />
                  <span className="text-lg font-bold text-card-foreground">
                    {trafficData[direction as keyof typeof trafficData].count}
                  </span>
                  <span className="text-xs text-muted-foreground">vehicles</span>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Wait: {trafficData[direction as keyof typeof trafficData].waitTime}s</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

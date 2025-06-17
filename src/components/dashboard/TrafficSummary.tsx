
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrafficLight } from "@/components/ui/traffic-light";
import { Clock, Car } from "lucide-react";

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
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground text-lg">Live Traffic Control</CardTitle>
          <Badge variant="outline" className="border-emerald-400 text-emerald-400">
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
              className="flex flex-col items-center p-4 rounded-lg bg-muted/20 border border-border/50 space-y-4"
            >
              {/* Traffic Light */}
              <TrafficLight 
                direction={direction}
                isActive={currentGreen === direction}
              />
              
              {/* Traffic Stats */}
              <div className="flex flex-col items-center space-y-2 mt-6">
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

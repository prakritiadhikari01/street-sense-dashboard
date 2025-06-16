
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
          <CardTitle className="text-card-foreground text-lg">Live Traffic</CardTitle>
          <Badge variant="outline" className="border-emerald-400 text-emerald-400">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {directions.map((direction) => (
            <div 
              key={direction} 
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-muted/30 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrafficLight 
                  direction={direction}
                  isActive={currentGreen === direction}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="font-semibold text-xs sm:text-sm text-card-foreground capitalize">
                  {direction}
                </span>
              </div>
              
              <div className="flex items-center gap-1 mb-1">
                <Car className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                <span className="text-base sm:text-lg font-bold text-card-foreground">
                  {trafficData[direction as keyof typeof trafficData].count}
                </span>
              </div>
              
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{trafficData[direction as keyof typeof trafficData].waitTime}s</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

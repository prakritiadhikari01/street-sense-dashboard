
import { Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CameraFeedProps {
  direction: string;
  isActive?: boolean;
  className?: string;
}

export function CameraFeed({ direction, isActive = false, className }: CameraFeedProps) {
  return (
    <Card className={cn("p-4 bg-card border-border", className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm text-card-foreground capitalize">
          {direction} Camera
        </h3>
        <div className={cn(
          "w-2 h-2 rounded-full",
          isActive ? "bg-emerald-400 animate-pulse" : "bg-muted-foreground/30"
        )} />
      </div>
      
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Camera className="w-8 h-8" />
          <span className="text-xs">Live Feed</span>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-muted-foreground text-center">
        {isActive ? "Recording" : "Standby"}
      </div>
    </Card>
  );
}

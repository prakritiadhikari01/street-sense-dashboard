
import { cn } from "@/lib/utils";

interface TrafficLightProps {
  direction: string;
  isActive: boolean;
  className?: string;
}

export function TrafficLight({ direction, isActive, className }: TrafficLightProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Single Traffic Light Circle */}
      <div className="w-16 h-16 flex items-center justify-center">
        <div 
          className={cn(
            "w-12 h-12 rounded-full border-2 transition-all duration-500 shadow-lg",
            isActive 
              ? "bg-emerald-500 border-emerald-400 shadow-emerald-500/50" 
              : "bg-red-500 border-red-400 shadow-red-500/50"
          )}
        />
      </div>
      
      {/* Direction Label */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="text-xs font-medium text-foreground capitalize bg-background/80 px-2 py-1 rounded border">
          {direction}
        </span>
      </div>
    </div>
  );
}


import { cn } from "@/lib/utils";

interface TrafficLightProps {
  direction: string;
  isActive: boolean;
  className?: string;
}

export function TrafficLight({ direction, isActive, className }: TrafficLightProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Traffic Light Container */}
      <div className="w-12 h-16 bg-gray-800 dark:bg-gray-900 rounded-lg border-2 border-gray-600 dark:border-gray-700 flex flex-col items-center justify-center gap-1 p-1">
        {/* Red Light */}
        <div 
          className={cn(
            "w-3 h-3 rounded-full border transition-all duration-500",
            !isActive 
              ? "bg-red-500 border-red-400 shadow-lg shadow-red-500/50" 
              : "bg-red-900/30 border-red-900/50"
          )}
        />
        
        {/* Yellow Light */}
        <div 
          className={cn(
            "w-3 h-3 rounded-full border transition-all duration-500",
            "bg-yellow-900/30 border-yellow-900/50"
          )}
        />
        
        {/* Green Light */}
        <div 
          className={cn(
            "w-3 h-3 rounded-full border transition-all duration-500",
            isActive 
              ? "bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/50" 
              : "bg-emerald-900/30 border-emerald-900/50"
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

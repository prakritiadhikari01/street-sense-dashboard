
import { cn } from "@/lib/utils";

interface TrafficLightProps {
  direction: string;
  isActive: boolean;
  className?: string;
}

export function TrafficLight({ direction, isActive, className }: TrafficLightProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300",
        isActive 
          ? "bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/50" 
          : "bg-muted border-muted-foreground/20",
        className
      )}
    >
      <div 
        className={cn(
          "w-3 h-3 rounded-full transition-all duration-300",
          isActive ? "bg-white" : "bg-muted-foreground/30"
        )}
      />
    </div>
  );
}

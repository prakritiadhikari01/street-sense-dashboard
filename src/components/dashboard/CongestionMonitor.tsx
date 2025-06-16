
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const congestionData = [
  { direction: "North", score: 85, status: "Critical", color: "red", waitTime: 25 },
  { direction: "South", score: 45, status: "Normal", color: "amber", waitTime: 145 },
  { direction: "East", score: 15, status: "Clear", color: "emerald", waitTime: 89 },
  { direction: "West", score: 78, status: "Heavy", color: "red", waitTime: 203 }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Critical":
    case "Heavy":
      return <AlertTriangle className="w-4 h-4 text-red-400" />;
    case "Normal":
      return <Clock className="w-4 h-4 text-amber-400" />;
    case "Clear":
      return <CheckCircle className="w-4 h-4 text-emerald-400" />;
    default:
      return <Clock className="w-4 h-4 text-muted-foreground" />;
  }
};

export function CongestionMonitor() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>Congestion Monitor</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {congestionData.map((data) => (
            <div key={data.direction} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(data.status)}
                  <span className="font-medium text-card-foreground">{data.direction}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">Score: </span>
                  <span className="font-bold text-card-foreground">{data.score}</span>
                </div>
              </div>
              <Progress 
                value={data.score} 
                className="h-2"
              />
              <div className="flex items-center justify-between text-sm">
                <span className={`font-medium ${
                  data.color === 'red' ? 'text-red-400' :
                  data.color === 'amber' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {data.status}
                </span>
                <span className="text-muted-foreground">Wait: {data.waitTime}s</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

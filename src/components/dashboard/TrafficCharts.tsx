
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const currentTrafficData = [
  { direction: 'North', vehicles: 12, congestion: 85 },
  { direction: 'South', vehicles: 8, congestion: 45 },
  { direction: 'East', vehicles: 3, congestion: 15 },
  { direction: 'West', vehicles: 15, congestion: 78 }
];

const historicalData = [
  { time: '10:00', North: 8, South: 12, East: 5, West: 10 },
  { time: '10:15', North: 10, South: 8, East: 3, West: 12 },
  { time: '10:30', North: 12, South: 6, East: 7, West: 15 },
  { time: '10:45', North: 15, South: 9, East: 4, West: 18 },
  { time: '11:00', North: 12, South: 8, East: 3, West: 15 }
];

export function TrafficCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Current Traffic Bar Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Current Vehicle Count</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={currentTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" />
              <XAxis dataKey="direction" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--card-foreground))'
                }} 
              />
              <Bar dataKey="vehicles" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Historical Traffic Line Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Traffic Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--card-foreground))'
                }} 
              />
              <Line type="monotone" dataKey="North" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="South" stroke="#f59e0b" strokeWidth={2} />
              <Line type="monotone" dataKey="East" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="West" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

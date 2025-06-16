
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, Power, RotateCcw, Brain, User } from "lucide-react";
import { useState } from "react";

export function ControlPanel() {
  const [aiMode, setAiMode] = useState(true);
  const [systemActive, setSystemActive] = useState(true);

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Settings className="w-5 h-5" />
          <span>Control Panel</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* System Status */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300">System Status</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">System Power</span>
            <div className="flex items-center space-x-2">
              <Switch 
                checked={systemActive} 
                onCheckedChange={setSystemActive}
              />
              <Power className={`w-4 h-4 ${systemActive ? 'text-emerald-400' : 'text-slate-500'}`} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">AI Mode</span>
            <div className="flex items-center space-x-2">
              <Switch 
                checked={aiMode} 
                onCheckedChange={setAiMode}
              />
              {aiMode ? (
                <Brain className="w-4 h-4 text-blue-400" />
              ) : (
                <User className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Current Mode */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300">Current Mode</h4>
          <Badge 
            variant="outline" 
            className={`w-full justify-center ${
              aiMode 
                ? 'border-blue-400 text-blue-400' 
                : 'border-amber-400 text-amber-400'
            }`}
          >
            {aiMode ? 'AI Controlled' : 'Manual Override'}
          </Badge>
        </div>

        <Separator className="bg-slate-700" />

        {/* Manual Controls */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300">Manual Override</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
              disabled={aiMode}
            >
              North
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
              disabled={aiMode}
            >
              South
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
              disabled={aiMode}
            >
              East
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
              disabled={aiMode}
            >
              West
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* System Actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300">System Actions</h4>
          <Button 
            variant="outline" 
            className="w-full border-amber-400 text-amber-400 hover:bg-amber-400/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset System
          </Button>
        </div>

        {/* AI Summary */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300">AI Summary</h4>
          <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300">
              "North direction shows high congestion for 3 cycles. West direction priority recommended for next switch."
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export const StatCard = ({ title, value, icon: Icon, trend, trendUp }: StatCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-3 rounded-xl ${trendUp ? 'bg-success/10' : 'bg-primary/10'}`}>
          <Icon className={`w-6 h-6 ${trendUp ? 'text-success' : 'text-primary'}`} />
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            trendUp ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
          }`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-3xl font-bold text-card-foreground">{value}</p>
    </Card>
  );
};

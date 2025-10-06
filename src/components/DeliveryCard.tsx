import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Package } from "lucide-react";

interface DeliveryCardProps {
  address: string;
  time: string;
  priority: "high" | "medium" | "low";
  distance: string;
  status: "pending" | "in-progress" | "completed";
}

const priorityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-warning text-warning-foreground",
  low: "bg-success text-success-foreground",
};

const statusLabels = {
  pending: "Pendente",
  "in-progress": "Em rota",
  completed: "Entregue",
};

export const DeliveryCard = ({ address, time, priority, distance, status }: DeliveryCardProps) => {
  return (
    <Card className="p-4 bg-gradient-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Package className="w-5 h-5 text-primary" />
          </div>
          <Badge className={priorityColors[priority]}>
            {priority === "high" ? "Alta" : priority === "medium" ? "Média" : "Baixa"}
          </Badge>
        </div>
        <span className="text-xs text-muted-foreground">{statusLabels[status]}</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm font-medium text-card-foreground line-clamp-2">{address}</p>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{time}</span>
          </div>
          <span className="font-medium">{distance}</span>
        </div>
      </div>
    </Card>
  );
};

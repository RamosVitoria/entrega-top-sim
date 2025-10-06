import { Button } from "@/components/ui/button";
import { DeliveryCard } from "@/components/ui/delivery-card";
import { StatCard } from "@/components/ui/stat-card";
import { Package, Clock, TrendingUp, Map, Navigation } from "lucide-react";

const Index = () => {
  const mockDeliveries = [
    {
      address: "Rua das Flores, 123 - Centro, São Paulo - SP",
      time: "14:30",
      priority: "high" as const,
      distance: "2.3 km",
      status: "pending" as const,
    },
    {
      address: "Av. Paulista, 1578 - Bela Vista, São Paulo - SP",
      time: "15:00",
      priority: "medium" as const,
      distance: "3.8 km",
      status: "pending" as const,
    },
    {
      address: "Rua Augusta, 456 - Consolação, São Paulo - SP",
      time: "15:45",
      priority: "high" as const,
      distance: "4.2 km",
      status: "pending" as const,
    },
    {
      address: "Rua Oscar Freire, 789 - Jardins, São Paulo - SP",
      time: "16:15",
      priority: "low" as const,
      distance: "5.1 km",
      status: "pending" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">RouteMax</h1>
                <p className="text-xs text-muted-foreground">Otimizador de Rotas</p>
              </div>
            </div>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Map className="w-4 h-4 mr-2" />
              Ver Mapa
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Entregas Hoje"
            value="12"
            icon={Package}
            trend="+3"
            trendUp={true}
          />
          <StatCard
            title="Tempo Médio"
            value="18min"
            icon={Clock}
            trend="-5min"
            trendUp={true}
          />
          <StatCard
            title="Km Rodados"
            value="42.3"
            icon={TrendingUp}
            trend="-8%"
            trendUp={true}
          />
          <StatCard
            title="Economia"
            value="R$ 127"
            icon={TrendingUp}
            trend="+15%"
            trendUp={true}
          />
        </section>

        {/* Deliveries Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Entregas Pendentes</h2>
              <p className="text-sm text-muted-foreground">
                Rota otimizada para economizar 8.2 km
              </p>
            </div>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
              Otimizar Rota
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockDeliveries.map((delivery, index) => (
              <DeliveryCard key={index} {...delivery} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

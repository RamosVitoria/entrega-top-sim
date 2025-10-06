import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, TrendingUp, Clock, MapPin, LogOut } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { DeliveryCard } from "@/components/DeliveryCard";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/login");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  };

  const mockDeliveries = [
    {
      address: "Rua das Flores, 123 - Centro",
      time: "14:30",
      priority: "high" as const,
      distance: "2.5 km",
      status: "pending" as const,
    },
    {
      address: "Av. Paulista, 1000 - Bela Vista",
      time: "15:00",
      priority: "medium" as const,
      distance: "5.2 km",
      status: "in-progress" as const,
    },
    {
      address: "Rua Augusta, 500 - Consolação",
      time: "15:45",
      priority: "low" as const,
      distance: "3.8 km",
      status: "pending" as const,
    },
  ];

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Optilogix</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
          <p className="text-muted-foreground">Bem-vindo ao seu painel de controle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={Package}
            title="Entregas Hoje"
            value="12"
            trend="+3 vs ontem"
            trendUp
          />
          <StatCard
            icon={TrendingUp}
            title="Taxa de Conclusão"
            value="94%"
            trend="+2% vs semana passada"
            trendUp
          />
          <StatCard
            icon={Clock}
            title="Tempo Médio"
            value="28min"
            trend="-5min vs ontem"
            trendUp
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Próximas Entregas
            </h3>
            <div className="space-y-4">
              {mockDeliveries.map((delivery, index) => (
                <DeliveryCard key={index} {...delivery} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Mapa de Rotas</h3>
            <div className="bg-card rounded-lg border border-border p-8 h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Mapa será exibido aqui</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

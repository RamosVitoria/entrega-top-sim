import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Package, TrendingUp, MapPin, Clock } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Optilogix</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Entrar
            </Button>
            <Button onClick={() => navigate("/register")}>
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Otimize suas rotas de entrega
          <br />
          <span className="text-primary">com inteligência</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Reduza tempo, economize combustível e aumente a produtividade dos seus entregadores com rotas inteligentes.
        </p>
        <Button size="lg" onClick={() => navigate("/register")} className="text-lg px-8 py-6">
          Começar Agora
        </Button>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Rotas Otimizadas</h3>
            <p className="text-muted-foreground">
              Calcule automaticamente as melhores rotas considerando tráfego e prioridades.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Economia de Tempo</h3>
            <p className="text-muted-foreground">
              Reduza até 30% do tempo gasto em entregas com planejamento inteligente.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Aumento de Produtividade</h3>
            <p className="text-muted-foreground">
              Mais entregas por dia, menos custos operacionais e clientes mais satisfeitos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

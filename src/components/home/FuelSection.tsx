import { Fuel, MapPin, Clock, ChevronRight, Droplet, Loader2 } from 'lucide-react';
import { useGasStations, useCheapestGasStation } from '@/hooks/useGasStations';
import { cn } from '@/lib/utils';

export function FuelSection() {
  const { data: stations, isLoading } = useGasStations();
  const { data: cheapestGas } = useCheapestGasStation();

  if (isLoading) {
    return (
      <section className="py-4">
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (!stations || stations.length === 0) {
    return null;
  }
  
  return (
    <section className="py-4">
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="flex items-center gap-2">
          <Fuel className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Combustíveis</h2>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Ver mapa
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      {/* Highlight Card */}
      {cheapestGas && (
        <div className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-gold shadow-gold">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-primary-foreground/80">Gasolina mais barata</p>
              <p className="text-2xl font-bold text-primary-foreground mt-1">
                R$ {Number(cheapestGas.gasoline).toFixed(2).replace('.', ',')}
              </p>
              <p className="text-sm text-primary-foreground/90 mt-1">{cheapestGas.name}</p>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-foreground/20">
              <MapPin className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground">{cheapestGas.distance} km</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Fuel Cards */}
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {stations.slice(0, 4).map((station, index) => (
          <div
            key={station.id}
            className={cn(
              "flex-shrink-0 w-48 p-4 bg-card rounded-2xl shadow-soft transition-all hover:shadow-medium animate-slide-up"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                {station.brand}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {station.updated_at}
              </div>
            </div>
            
            <h3 className="text-sm font-semibold text-foreground mb-3 line-clamp-1">
              {station.name}
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs text-muted-foreground">Gasolina</span>
                </div>
                <span className="text-sm font-bold text-foreground">
                  R$ {Number(station.gasoline).toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xs text-muted-foreground">Etanol</span>
                </div>
                <span className="text-sm font-bold text-foreground">
                  R$ {Number(station.ethanol).toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs text-muted-foreground">Diesel</span>
                </div>
                <span className="text-sm font-bold text-foreground">
                  R$ {Number(station.diesel).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">{station.distance} km</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

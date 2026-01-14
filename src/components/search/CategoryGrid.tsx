import { 
  ShoppingBasket, 
  Pill, 
  Car, 
  Home, 
  Cpu, 
  Shirt, 
  PawPrint, 
  Smartphone 
} from 'lucide-react';
import { categories } from '@/data/mockData';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBasket,
  Pill,
  Car,
  Home,
  Cpu,
  Shirt,
  PawPrint,
  Smartphone,
};

export function CategoryGrid() {
  return (
    <section className="py-6 px-4 pb-24">
      <h2 className="text-lg font-bold text-foreground mb-4">Categorias Rápidas</h2>
      
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const Icon = iconMap[category.icon];
          
          return (
            <button
              key={category.id}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 hover:scale-105 animate-slide-up",
                category.color.replace('text-', 'hover:text-').split(' ')[0]
              )}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center shadow-soft",
                category.color.split(' ')[0]
              )}>
                <Icon className={cn("w-7 h-7", category.color.split(' ')[1])} />
              </div>
              <span className="text-xs font-medium text-foreground text-center">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Recent searches */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Buscas recentes</h3>
        <div className="flex flex-wrap gap-2">
          {['Arroz 5kg', 'Óleo motor', 'Dipirona', 'Ração cachorro'].map((term) => (
            <button
              key={term}
              className="px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
      
      {/* Popular searches */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Populares agora</h3>
        <div className="flex flex-wrap gap-2">
          {['Gasolina', 'Supermercado', 'Farmácia 24h', 'Açougue'].map((term, i) => (
            <button
              key={term}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="text-primary mr-1">#{i + 1}</span>
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { 
  ShoppingBasket, 
  Pill, 
  Car, 
  Home, 
  Cpu, 
  Shirt, 
  PawPrint, 
  Smartphone,
  Loader2,
  MapPin
} from 'lucide-react';
import { useCategories } from '@/hooks/useCategories';
import { useSearchProducts } from '@/hooks/useProducts';
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

interface CategoryGridProps {
  onCategorySelect?: (categoryName: string) => void;
  searchQuery?: string;
}

export function CategoryGrid({ onCategorySelect, searchQuery = '' }: CategoryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [recentSearches] = useState(['Arroz 5kg', 'Óleo motor', 'Dipirona', 'Ração cachorro']);
  const [popularSearches] = useState(['Gasolina', 'Supermercado', 'Farmácia 24h', 'Açougue']);

  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: searchResults, isLoading: searchLoading } = useSearchProducts(searchQuery);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    onCategorySelect?.(categoryName);
  };

  const handleTagClick = (term: string) => {
    onCategorySelect?.(term);
  };

  // Show search results if there's a query
  if (searchQuery && searchQuery.length > 0) {
    return (
      <section className="py-6 px-4 pb-24">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Resultados para "{searchQuery}"
        </h2>

        {searchLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        {!searchLoading && searchResults && searchResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto encontrado</p>
          </div>
        )}

        {!searchLoading && searchResults && searchResults.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {searchResults.map((product, index) => (
              <div
                key={product.id}
                className={cn(
                  "bg-card rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-slide-up"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-28 object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-gold shadow-gold">
                      <span className="text-[10px] font-bold text-primary-foreground">
                        -{product.discount}%
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-3">
                  <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-lg font-bold text-primary">
                      R$ {Number(product.price).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground line-clamp-1">{product.store}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-primary">{product.distance} km</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="py-6 px-4 pb-24">
      <h2 className="text-lg font-bold text-foreground mb-4">Categorias Rápidas</h2>
      
      {categoriesLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {categories?.map((category, index) => {
            const Icon = iconMap[category.icon] || ShoppingBasket;
            const isSelected = selectedCategory === category.name;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-slide-up",
                  category.color.replace('text-', 'hover:text-').split(' ')[0],
                  isSelected && "ring-2 ring-primary ring-offset-2"
                )}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center shadow-soft transition-all",
                  category.color.split(' ')[0],
                  isSelected && "shadow-gold"
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
      )}
      
      {/* Recent searches */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Buscas recentes</h3>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((term) => (
            <button
              key={term}
              onClick={() => handleTagClick(term)}
              className="px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground hover:bg-secondary hover:text-secondary-foreground active:scale-95 transition-all"
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
          {popularSearches.map((term, i) => (
            <button
              key={term}
              onClick={() => handleTagClick(term)}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
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
